<template>
  <div>
    <div class="header-content">
      <div>
        <el-input v-model="inputValue" style="width: 240px" placeholder="请输入药品名称" clearable />
        <el-button type="primary" :icon="Search" style="margin-left: 10px;" @click="handleSearch">搜索</el-button>
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%" v-loading="loading">
      <el-table-column prop="image" label="药品图片">
        <template #default="{ row }">
          <el-image style="width: 100px; height: 100px" :src="row.images" fit="fill" />
        </template>
      </el-table-column>
      <el-table-column prop="medicineName" label="药品名称" />
      <el-table-column prop="description" label="药品描述" />
      <el-table-column prop="price" label="价格" />
      <el-table-column prop="status" label="状态" />
      <el-table-column prop="updateTime" label="更新时间" />
      <el-table-column prop="productPlace" label="生产地" />
      <el-table-column prop="effectiveTime" label="药效时间" />
      <el-table-column fixed="right" label="操作" min>
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
import { Drugpaginationquery, Deleteinformation } from '@/apis/drug'
import { onMounted, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const tableData = ref([])
const total = ref(0)
const loading = ref(false)
const inputValue = ref('')
const queryParams = {
  page: 1,
  pageSize: 5,
  medicineName: ''
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
    const res = await Drugpaginationquery(queryParams)
    tableData.value = res.data.data.records.map((item) => {
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
    await Deleteinformation({ ids: [row.medicineId].join(',') })
  } catch (error) {
    console.log('error', error)
  }
  await getTableData()
}
const handleSearch = async () => {
  queryParams.medicineName = inputValue.value
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