// 引入 wepy 到当前脚本文件
import wepy from 'wepy'

// 定义封装请求函数
const requestData = (url, params = {}) => {
  return wepy.request({
    url: requestData.baseUrl + url, // 开发者服务器接口地址",
    data: params.data || {}, // 请求的参数",
    method: params.method || 'GET', // 请求方式
    dataType: params.dataType || 'json', // 如果设为json，会尝试对返回的数据做一次 JSON.parse
    header: params.header || {
      // 响应头 默认值 会对数据进行 JSON 序列化
      'content-type': 'application/json'
    }
  })
}
// 请求基准路径
requestData.baseUrl = ''

// 导出封装函数
export default {
  requestData
}
