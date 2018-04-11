import Vue from 'vue'
import Vuex from 'vuex'
import archives from './modules/archives'
import app from './modules/app'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = () => new Vuex.Store({
  modules: {
    app,
    archives
  },
  strict: debug
})

export default store

// export default new Vuex.Store({
//   state,
//   mutations,
//   actions
// })