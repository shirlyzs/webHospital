import axios from '@/api/index'

// post new URLSearchParams(..)

export const AdminLogin = (adminName, password) => {
  return axios.request({
    method: 'get',
    url: `adminLoginVerify?adminName=${adminName}&password=${password}`
  })
}

// 查询管理员列表
export const findAdmin = (pageNum, pageSize) => {
  return axios.request({
    method: 'get',
    url: `/adminLoginVerify/getAdmin/${pageNum}/${pageSize}`
  })
}
// 删除
export const delAdmin = adminId => {
  return axios.request({
    method: 'get',
    url: `/adminLoginVerify/admin//delete/${adminId}`
  })
}

// 用户相关
// 查询用户
export const findUser = (pageNum, pageSize) => {
  return axios.request({
    method: 'get',
    url: `/adminLoginVerify/getUser/${pageNum}/${pageSize}`
  })
}
// 删除
export const delUser = userId => {
  return axios.request({
    method: 'get',
    url: `/userLoginVerify/user/delete/${userId}`
  })
}
// 修改用户信息
export const updateUser = (userId, password, tel, info, balance) => {
  return axios.request({
    method: 'get',
    url: `/adminLoginUpdateUser/?userId=${userId}&password=${password}&tel=${tel}&info=${info}&balance=${balance}`
  })
}

// 医生
// 查询
export const findDocter = (pageNum, pageSize) => {
  return axios.request({
    method: 'get',
    url: `/userLoginVerify/getDoctor/${pageNum}/${pageSize}`
  })
}
// 删除
export const delDocter = doctorId => {
  return axios.request({
    method: 'get',
    url: `/userLoginVerify/docter/delete/${doctorId}`
  })
}
// 修改医生信息
export const updateDocter = (
  doctorName,
  password,
  resume,
  department,
  keShi,
  ranks,
  price
) => {
  return axios.request({
    method: 'get',
    url: `/adminLoginAddDoctor/?doctorName=${doctorName}&password=${password}&resume=${resume}&department=${department}&keShi=${keShi}&ranks=${ranks}$price=${price}`
  })
}
