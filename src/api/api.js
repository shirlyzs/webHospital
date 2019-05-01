import axios from '@/api/index'
import Mock from '@/api/mock'

// post new URLSearchParams(newInfo)

//用户登录
export const login = (info) => {
  return axios.request({
    method: 'get',
    url: `/userLoginVerify?userName=${info.userName}&password=${info.password}&tel=${info.tel}`
  })
}
//医生登陆
export const doctorLogin = (info) => {
  return axios.request({
    method: 'get',
    url: `/doctorLoginVerify?doctorName=${info.doctorName}&password=${info.password}&keShi=${info.keShi}`
  })
}
//修改用户信息
export const updateUser = (userId, tel, info) => {
  return axios.request({
    method: 'get',
    url: `/adminLoginUpdateUser?userId=${userId}&tel=${tel}&info=${info}`
  })
}
//用户个人信息查询
export const person = (userinfo) => {
  return axios.request({
    method: 'get',
    url: `/userLoginVerify/user/${userinfo.userId}`
  })
}
//按用户名查询订单
export const record = (info) => {
  return axios.request({
    method: 'get',
    url: `/userLoginVerify/orders/userName?userName=${info.userName}`
  })
}
//用户注册
export const register = (info) => {
  return axios.request({
    method: 'get',
    url: `/userLoginRegister?userName=${info.userName}&password=${info.password}&password2=${info.password2}`
  })
}
//文章查询
export const article = (articleInfo) => {
  return axios.request({
    method: 'get',
    url: `/userLoginVerify/getArticle/0/15?articleId=${articleInfo.articleId}&title=${articleInfo.title}&author=${articleInfo.author}&type=${articleInfo.type}`
  })
}
//按id查询详情页
export const artdetail = (articleInfo) => {
  return axios.request({
    method: 'get',
    url: `/userLoginVerify/article/${articleInfo.articleId}`
  })
}
export const news = (newInfo) => {
  return axios.request({
    method: 'get',
    url: `/adminLoginVerify/getNews/0/5?newsId=${newInfo.newsId}&title=${newInfo.title}&author=${newInfo.author}&content=${newInfo.content}`,
  })
}
//查询所有新闻
export const xinwen = (newInfo) => {
  return axios.request({
    method: 'get',
    url: `/adminLoginVerify/getNews/0/15?newsId=${newInfo.newsId}&title=${newInfo.title}&author=${newInfo.author}&content=${newInfo.content}`,
  })
}
//按id查询新闻详情
export const detail = (detailInfo) => {
  return axios.request({
    method: 'get',
    url: `/adminLoginVerify/news/${detailInfo.newsId}`,
  })
}
//查询所有医生
export const doctor = (doctorInfo) => {
  return axios.request({
    method: 'get',
    url: `/userLoginVerify/getDoctor/0/50?doctorName=${doctorInfo.doctorName}&department=${doctorInfo.department}&keShi=${doctorInfo.keShi}&ranks=${doctorInfo.ranks}`,
  })
}
//按id查询医生信息     /adminLoginUpdateDoctor
export const doctordetail = (doctorInfo) => {
  return axios.request({
    method: 'get',
    url: `/doctorLoginVerify/doctor/${doctorInfo.doctorId}`,
  })
}
//按医生ID查留言
export const board = (Info) => {
  return axios.request({
    method: 'get',
    url: `/doctorLoginVerify/doctorBoard?doctorId=${Info.doctorId}`,
  })
}
//修改最大预约数
export const changeDoctor = () => {
  return axios.request({
    method: 'get',
    url: `/adminLoginUpdateDoctor`,
  })
}
//查询所有科室
export const room = (roomInfo) => {
  return axios.request({
    method: 'get',
    url: `/userLoginVerify/getKeShi/0/20?department=${roomInfo.department}`,
  })
}
//科室介绍
export const roomdetail = (roomInfo) => {
  return axios.request({
    method: 'get',
    url: `/userLoginVerify/keShi/${roomInfo.keShiId}`,
  })
}
export const video = () => {
  return Mock.request({
    method: 'get',
    url: `/video`
  })
}
export const hos = () => {
  return Mock.request({
    method: 'get',
    url: `/hos`
  })
}
export const notice = () => {
  return Mock.request({
    method: 'get',
    url: `/news`
  })
}
export const know = () => {
  return Mock.request({
    method: 'get',
    url: `/know`
  })
}
export const ming = () => {
  return Mock.request({
    method: 'get',
    url: `/ming`
  })
}