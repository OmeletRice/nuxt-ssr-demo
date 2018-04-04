import http from 'http'
import https from 'https'

import { apiEndpointBaseUrl } from '~/site-config'

export default {
  headers: {
    // post: {
    //   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    // },
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Accept-Language': 'zh-CN',
    'X-Country': 'zh'
  },

  baseURL: apiEndpointBaseUrl,

  timeout: 10000,

  withCredentials: true,

  responseType: 'json',

  httpAgent: new http.Agent({
    keepAlive: true
  }),

  httpsAgent: new https.Agent({
    keepAlive: true
  })
}