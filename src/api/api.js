import axios from '@/api/index'
import Mock from '@/api/mock'

// post new URLSearchParams(newInfo)

export const login = (info) => {
  return axios.request({
    method: 'get',
    url: `/userLoginVerify?userName=${info.userName}&password=${info.password}&tel=${info.tel}`
  })
}
export const person = (info) => {
  return axios.request({
    method: 'get',
    url: `/userLoginVerify/user/${info.userId}`
  })
}
export const record = (info) => {
  return axios.request({
    method: 'get',
    url: `/userLoginVerify/orders/userName?userName=${info.userName}`
  })
}
export const register = (info) => {
  return axios.request({
    method: 'get',
    url: `/userLoginRegister?userName=${info.userName}&password=${info.password}&password2=${info.password2}`
  })
}
export const article = (articleInfo) => {
  return axios.request({
    method: 'get',
    url: `/userLoginVerify/getArticle/0/15?articleId=${articleInfo.articleId}&title=${articleInfo.title}&author=${articleInfo.author}&type=${articleInfo.type}`
  })
}
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
export const xinwen = (newInfo) => {
  return axios.request({
    method: 'get',
    url: `/adminLoginVerify/getNews/0/15?newsId=${newInfo.newsId}&title=${newInfo.title}&author=${newInfo.author}&content=${newInfo.content}`,
  })
}
export const detail = (detailInfo) => {
  return axios.request({
    method: 'get',
    url: `/adminLoginVerify/news/${detailInfo.newsId}`,
  })
}
export const doctor = (doctorInfo) => {
  return axios.request({
    method: 'get',
    url: `/userLoginVerify/getDoctor/0/50?doctorName=${doctorInfo.doctorName}&department=${doctorInfo.department}&keShi=${doctorInfo.keShi}&ranks=${doctorInfo.ranks}`,
  })
}
export const doctordetail = (doctorInfo) => {
  return axios.request({
    method: 'get',
    url: `/doctorLoginVerify/doctor/${doctorInfo.doctorId}`,
  })
}
export const room = (roomInfo) => {
  return axios.request({
    method: 'get',
    url: `/userLoginVerify/getKeShi/0/20?department=${roomInfo.department}`,
  })
}
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