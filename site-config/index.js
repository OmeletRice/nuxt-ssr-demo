
var apiEndpointBaseUrl = ''
const apiBaseUrl = {
  development: 'https://banner-storage-ms.juejin.im',
  production: 'https://banner-storage-ms.juejin.im/v1/get_banner?src=web&pageSize=1'
}[process.env.NODE_ENV]

if (process.server) {
  // let host = apiBaseUrl || process.env.HOST
  apiEndpointBaseUrl = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
} else {
  apiEndpointBaseUrl = apiBaseUrl
}

export { apiEndpointBaseUrl }

export const mock = true