<template>
  <div id="app">
    <!-- app组件 -->
    <h1>app组件</h1>
    <el-button>123</el-button>
  </div>
</template>

<script>
// 命名导出要用大括号命名导入
import { registerAPI } from '@/api/index'
export default {
  async created () {
    const res = await registerAPI()
    console.log(res)
  }
}
</script>

<style lang="scss" scoped>

</style>
