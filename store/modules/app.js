import api from '~/service'

const state = () => {
  return {
    carousel: [],
    masterInfo: {}
  }
}

const getters = {}

const mutations = {
  carousel (state, params) {
    state.carousel = params.data
  },
  master (state, params) {
    state.masterInfo = params.data
  }
}

const actions = {
  async getCarousel ({ commit }, params) {
    const appCarousel = await api.app.fetchCarousel()
    commit('carousel', { data: appCarousel})
  },

  async getMasterInfo ({ commit }, params) {
    const masterInfo = await api.app.fetchMaster()
    commit('master', { data: masterInfo })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
