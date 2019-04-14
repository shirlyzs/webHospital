import axios from '@/api/index'
import Mock from '@/api/mock'

// post new URLSearchParams(newInfo)

export const login = (info) => {
  return axios.request({
    method: 'get',
    url: `/userLoginVerify?userName=${info.userName}&password=${info.password}&tel=${info.tel}`
  })
}
export const register = (info) => {
  return axios.request({
    method: 'get',
    url: `/userLoginRegister?userName=${info.userName}&password=${info.password}&password2=${info.password2}`
  })
}
// export const article = (newsInfo) => {
//   return axios.request({
//     method: 'get',
//     url: `/userLoginVerify/getArticle/0/2?articleId=${newsInfo.articleId}&title&author=${newsInfo.author}&type`
//   })
// }

  export const news = (newInfo) => {
    return axios.request({
      method: 'get',
      url: `/adminLoginVerify/getNews/0/5?newsId=${newInfo.newsId}&title=${newInfo.title}&author=${newInfo.author}&content=${newInfo.content}`,
      // data: new URLSearchParams(newInfo)
    })
  }
  export const detail = (detailInfo) => {
    return axios.request({
      method: 'get',
      url: `/adminLoginVerify/news/newsId=${detailInfo.newsId}`,
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

export const room = () => {
  return Mock.request({
    method: 'get',
    url: `/room`
  })
}
