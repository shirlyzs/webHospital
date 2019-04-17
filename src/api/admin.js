import axios from '@/api/index'
// 登录
export const AdminLogin = (adminName, password) => {
  return axios.request({
    method: 'get',
    url: `adminLoginVerify?adminName=${adminName}&password=${password}`
  })
}


// 查询管理员列表 其余参数adminId，adminName，password
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




// 查询用户  其余参数userId，userName，info，tel
export const findUser = (pageNum, pageSize) => {
  return axios.request({
    method: 'get',
    url: `/adminLoginVerify/getUser/${pageNum}/${pageSize}`
  })
}
// 删除用户 res.message
export const delUser = userId => {
  return axios.request({
    method: 'get',
    url: `/userLoginVerify/user/delete/${userId}`
  })
}
// 修改用户信息 参数userId，password，tel，info，balance  res.message res.result
export const updateUser = (userId, password, tel, info, balance) => {
  return axios.request({
    method: 'get',
    url: `/adminLoginUpdateUser?userId=${userId}&password=${password}&tel=${tel}&info=${info}&balance=${balance}`
  })
}





// 医生查询  doctorName，department，keShi，ranks
export const findDoctor = (pageNum, pageSize) => {
  return axios.request({
    method: 'get',
    url: `/userLoginVerify/getDoctor/${pageNum}/${pageSize}`
  })
}
// 删除医生
export const delDoctor = doctorId => {
  return axios.request({
    method: 'get',
    url: `/doctorLoginVerify/doctor/delete/${doctorId}`
  })
}
// 修改医生信息
export const updateDoctor = (
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
    url: `/adminLoginAddDoctor?doctorName=${doctorName}&password=${password}&resume=${resume}&department=${department}&keShi=${keShi}&ranks=${ranks}$price=${price}`
  })
}




// 查询订单  其余参数 orderId，userName，doctorName，tel
export const findOrders = (
  pageNum, pageSize
) => {
  return axios.request({
    method: 'get',
    url: `/adminLoginVerify/getOrders/${pageNum}/${pageSize}`
  })
}
// 删除订单
export const delOrders = (orderId) => {
  return axios.request({
    method: 'get',
    url: `/adminLoginVerify/orders/delete/${orderId}`
  })
}



// 科室查询 其他keShiName，department
export const findDepartment = (
  pageNum, pageSize
) => {
  return axios.request({
    method: 'get',
    url: `/userLoginVerify/getKeShi/${pageNum}/${pageSize}`
  })
}



// 查找新闻  其余参数newsId，title，author，content
export const findNews = (
  pageNum, pageSize
) => {
  return axios.request({
    method: 'get',
    url: `/adminLoginVerify/getNews/${pageNum}/${pageSize}`
  })
}
//添加新闻
export const updateNews = (
  author, title, content
) => {
  return axios.request({
    method: 'get',
    url: `/adminLoginAddNews?author=${author}&title=${title}&content=${content}`
  })
}
// 删除新闻
export const delNews = newsId => {
  return axios.request({
    method: 'get',
    url: `/adminLoginVerify/news/delete/${newsId}`
  })
}




// 查找文章 其余参数articleId，title，author，type
export const findArticle = (
  pageNum, pageSize
) => {
  return axios.request({
    method: 'get',
    url: `/userLoginVerify/getArticle/${pageNum}/${pageSize}`
  })
}
//添加文章
export const updateArticle = (
  author, title, content, type
) => {
  return axios.request({
    method: 'get',
    url: `/adminLoginAddArticle?author=${author}&title=${title}&content=${content}&type=${type}`
  })
}
// 删除文章
export const delArticle = articleId => {
  return axios.request({
    method: 'get',
    url: `/adminLoginVerify/article/delete/${articleId}`
  })
}