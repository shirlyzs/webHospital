import axios from '@/api/index'

// post new URLSearchParams(..)

export const login = () => {
  return axios.request({
    method: 'get',
    url: `adminLoginVerify/news/3`
  })
}
