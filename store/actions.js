import api from '~/service'

export const getApp = async (store, params) => {
  return await api.app.fetch(params)
}
