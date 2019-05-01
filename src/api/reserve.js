import axios from '@/api/index'


//查询所有医生
export const reserve = (doctor) => {
    return axios.request({
      method: 'get',
      url: `/userLoginVerify/getDoctor/0/40?doctorName&department=${doctor.department}&keShi&ranks=${doctor.ranks}`
    })
  }
  //预约某个医生
  export const getReserve = (doctor) => {
    return axios.request({
      method: 'get',
      url: `/userLoginVerify/Orders/${doctor.userId}/${doctor.doctorId}`
    })
  }
  //病情描述
  export const updateUser = (userId,info,balance) => {
    return axios.request({
      method: 'get',
      url: `/adminLoginUpdateUser?userId=${userId}&info=${info}&balance=${balance}`
    })
  }
  //按医生姓名查询预约记录
  export const docOrder = (doctorinfo) => {
    return axios.request({
      method: 'get',
      url: `/doctorLoginVerify/orders/doctorName?doctorName=${doctorinfo.doctorName}`
    })
  }
  