import axios from 'axios'
import config from './config'
import resources from './resources'
import { authInterceptor } from './interceptors'
import { mock } from '~/site-config'

class Api {
  constructor (apiClient, resources) {
    this.apiClient = apiClient

    Object.entries(resources).forEach(([key, factory]) => {
      this[key] = factory(this.apiClient)
    })
  }
}

const apiClient = axios.create(config)

console.log(`state: [ ${mock ? 'mockApi' : 'onlineApi'} ] => [ ${config.baseURL} ]`)

apiClient.interceptors.request.use(authInterceptor)

const api = new Api(apiClient, resources)

if (mock) {
  import('./mock').then(({ mock }) => {
    mock(apiClient)
  })
}

// Vue.$api = api
// Vue.prototype.$api = api

export default api
