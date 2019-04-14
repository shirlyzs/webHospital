import axios from '@/api/index'

// post new URLSearchParams(..)

export const AdminLogin = (adminName, password) => {
  return axios.request({
    method: 'get',
    url: `adminLoginVerify?adminName=${adminName}&password=${password}`
  })
}
