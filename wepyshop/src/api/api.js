// 引入请求封装函数  那边是匿名导出不用{}
import wxRequest from '../utils/wxRequest'
// 引入常量库
import appCONST from '../utils/appCONST'

wxRequest.requestData.baseUrl = appCONST.HTTP_BASE_URL + 'api/public/v1/'

// 请求轮播图数据
const getSwiperData = params => {
  return wxRequest.requestData('home/swiperdata', params).then(res => res)
}
// 请求导航栏数据
const getNavData = params => {
  return wxRequest.requestData('home/catitems', params).then(res => res)
}
// 请求首页楼层数据
const getFloorData = params => {
  return wxRequest.requestData('home/floordata', params).then(res => res)
}
// 请求商品详情数据
const getDetailData = params => {
  return wxRequest.requestData('goods/detail', params).then(res => res)
}

export default {
  getSwiperData,
  getNavData,
  getFloorData,
  getDetailData
}
