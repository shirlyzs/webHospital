import axios from '@/api/index'


export const reserve = (doctor) => {
    return axios.request({
      method: 'get',
      url: `/userLoginVerify/getDoctor/0/40?doctorName&department=${doctor.department}&keShi&ranks=${doctor.ranks}`
    })
  }