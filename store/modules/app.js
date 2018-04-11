import api from '~/service'

const state = () => {
  return {
    carousel: []
  }
}

const getters = {}

const mutations = {
  carousel (state, params) {
    state.carousel = params.data
  }
}

const actions = {
  async getCarousel ({ commit }, params) {
    const appCarousel = await api.app.fetchCarousel()
    commit('carousel', { data: appCarousel})
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
