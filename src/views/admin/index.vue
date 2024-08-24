<template>
  <div>
    <div class="header-content">
      <el-button @click="handleAddAdmin" type="primary">新增管理员</el-button>
      <div>
        <el-select v-model="queryParams.permissions" clearable placeholder="选择管理员分类" style="width: 240px"
          @change="getTableData">
          <el-option v-for="item in permissions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%" v-loading="loading">
      <el-table-column fixed prop="adminName" label="管理员名称" />
      <el-table-column prop="images" label="头像">
        <template #default="{ row }">
          <el-image style="width: 100px; height: 100px" :src="row.images" fit="fill" />
        </template>
      </el-table-column>
      <el-table-column prop="username" label="账号" />
      <el-table-column prop="phone" label="电话" />
      <el-table-column prop="permissions" label="权限" />
      <el-table-column prop="adminName" label="管理员名称" />
      <el-table-column prop="status" label="账号状态" />
      <el-table-column fixed="right" label="操作" min->
        <template #default="{ row }">
          <el-button link type="primary" size="small" @click="() => handleDelete(row)">
            删除
          </el-button>
          <el-button link type="primary" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="demo-pagination-block">
      <el-pagination v-model:current-page="queryParams.page" v-model:page-size="queryParams.pageSize"
        :page-sizes="[5, 8, 10]" layout="total, sizes, prev, pager, next, jumper" :total="total"
        @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
    <el-drawer v-model="drawer" size="40%">
      <template #header>
        <h4>新增管理员</h4>
      </template>
      <template #default>
        <el-form :model="form" label-width="auto" style="max-width: 600px">
          <el-form-item label="头像">
            <PreviewPicture ref="previewPictureComRef"></PreviewPicture>
          </el-form-item>
          <el-form-item label="密码" required>
            <el-input v-model="form.password" />
          </el-form-item>
          <el-form-item label="手机号" required>
            <el-input v-model="form.phone" />
          </el-form-item>
          <el-form-item label="账号" required>
            <el-input v-model="form.username" />
          </el-form-item>
          <el-form-item label="真名" required>
            <el-input v-model="form.adminName" />
          </el-form-item>
          <el-form-item label="权限">
            <el-select v-model="form.permissions" placeholder="选择权限">
              <el-option label="一级管理员" :value="1" />
              <el-option label="二级管理员" :value="2" />
              <el-option label="三级管理员" :value="3" />
            </el-select>
          </el-form-item>
          <el-form-item label="权限">
            <el-select v-model="form.status" placeholder="账号状态">
              <el-option label="禁用" :value="1" />
              <el-option label="启用" :value="2" />
            </el-select>
          </el-form-item>
        </el-form>
      </template>
      <template #footer>
        <div style="flex: auto">
          <el-button @click="cancelClick">取消</el-button>
          <el-button type="primary" @click="confirmClick">确认</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup>
import { deleteuser } from '@/apis/user'
import { Querypermissions, Addedadministrators } from '@/apis/admin'
import { onMounted, ref } from 'vue'
import { adminCommonUpload } from '@/apis/common'
import PreviewPicture from '@/components/preview-picture/index.vue'
const previewPictureComRef = ref(null)
const tableData = ref([])
const total = ref(0)
const loading = ref(false)
const drawer = ref(false)
const form = ref({
  password: '',
  phone: '',
  username: '',
  adminName: '',
  permissions: '',
  status: '',
  images: ''
})
const queryParams = ref({
  page: 1,
  pageSize: 5,
  permissions: ''
})
const permissions = [
  {
    value: 1,
    label: '一级管理员',
  },
  {
    value: 2,
    label: '二级管理员',
  },
  {
    value: 3,
    label: '三级管理员',
  }

]
const confirmClick = async () => {
  const fileData = previewPictureComRef.value.fileFn().getFile()
  const formData = new FormData()
  formData.append('file', fileData.value.raw)
  try {
    const res = await adminCommonUpload(formData)
    form.value.images = res.data.data
    await Addedadministrators({
      ...form.value,
    })
    drawer.value = false
  } catch (error) {
    console.log('error', error)
  }
}
const handleCurrentChange = async (page) => {
  queryParams.value.page = page
  await getTableData()
}
const handleSizeChange = async (pageSize) => {
  queryParams.value.pageSize = pageSize
  await getTableData()
}
const getTableData = async () => {
  loading.value = true
  try {
    const res = await Querypermissions(queryParams.value)
    tableData.value = res.data.data.records.map((item) => {
      const status = ['禁用', '启用']
      item.permissions = permissions[item.permissions - 1]?.label ? permissions[item.permissions - 1].label : '一级管理员'
      item.status = status[item.status - 1] ? status[item.status - 1] : '禁用'
      return {
        ...item,
      }
    })
    total.value = res.data.data.total
  } catch (error) {
    console.log('error', error)
  }
  loading.value = false
}
const handleDelete = async (row) => {
  try {
    await deleteuser({ ids: [row.userId].join(',') })
  } catch (error) {
    console.log('error', error)
  }
  await getTableData()
}

const handleAddAdmin = () => {
  console.log('新增管理员')
  drawer.value = true
}
onMounted(async () => {
  await getTableData()
})
</script>

<style lang="scss" scoped>
.demo-pagination-block {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>