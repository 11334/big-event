// 基于axios封装网络请求
import axios from 'axios'
// 自定义axios
const myAxios = axios.create({
  baseURL: 'http://big-event-vue-api-t.itheima.net'
})
// 导出自定义axios
export default myAxios
