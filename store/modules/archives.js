import api from '~/service'

const state = () => {
  return {
    count: 0,
    articles: []
  }
}

const getters = {}

const mutations = {
  increment (state, params) {
    state.count = params.count
  },
  
  fetchArticles (state, params) {
    state.articles = params.data
    state.count = params.data.length
  }
}

const actions = {
  async getApp ({ commit }, params) {
    const appCount = await api.app.fetch()
    commit('increment', { count: appCount})
  },

  async getArticles ({ commit }, params) {
    const allArticles = await api.articles.fetchAll()
    if (allArticles.data && allArticles.data.length) {
      commit('fetchArticles', { data: allArticles.data })
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
