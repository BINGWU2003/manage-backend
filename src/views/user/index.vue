<template>
  <div>
    <div class="header-content">
      <div>
        <el-input v-model="inputValue" style="width: 240px" placeholder="请输入姓名" clearable />
        <el-button type="primary" :icon="Search" style="margin-left: 10px;" @click="handleSearch">搜索</el-button>
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%" v-loading="loading">
      <el-table-column fixed prop="gender" label="性别" />
      <el-table-column prop="images" label="头像">
        <template #default="{ row }">
          <el-image style="width: 100px; height: 100px" :src="row.images" fit="fill" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="phone" label="电话" />
      <el-table-column prop="username" label="账号" />
      <el-table-column prop="cardId" label="证件号" />
      <el-table-column prop="isAttendanceRecords" label="是否存在就诊记录" />
      <el-table-column prop="isHealthCare" label="是否有医保" />
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
  </div>
</template>

<script setup>
import { querycriteria, deleteuser } from '@/apis/user'
import { onMounted, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const tableData = ref([])
const total = ref(0)
const loading = ref(false)
const inputValue = ref('')
const queryParams = {
  page: 1,
  pageSize: 5,
  name: ''
}
const handleCurrentChange = async (page) => {
  queryParams.page = page
  await getTableData()
}
const handleSizeChange = async (pageSize) => {
  queryParams.pageSize = pageSize
  await getTableData()
}
const getTableData = async () => {
  loading.value = true
  try {
    const res = await querycriteria(queryParams)
    tableData.value = res.data.data.records.map((item) => {
      const data = {
        gender: item.gender ? '男' : '女',
        isHealthCare: item.isHealthCare ? '有' : '无',
        isAttendanceRecords: item.isAttendanceRecords ? '有' : "无"
      }
      return {
        ...item,
        ...data
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
const handleSearch = async () => {
  queryParams.name = inputValue.value
  await getTableData()
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
</style>