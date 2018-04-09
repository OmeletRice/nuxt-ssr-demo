import api from '~/service'

const state = () => {
  return {
    count: 0,
    articles: [],
    detail: {
      data: null
    }
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
  },

  fetchArticleDetail (state, params) {
    state.detail.data = params.data
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
  },

  async getArticleDetail ({ commit }, params) {
    const articleDetail = await api.articles.fetch(params)
    commit('fetchArticleDetail', articleDetail)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
