import axios from '@/api/index'

// post new URLSearchParams(..)

export const AdminLogin = (adminName, password) => {
  return axios.request({
    method: 'get',
    url: `adminLoginVerify?adminNme=${adminName}&password=${password}`
  })
}
