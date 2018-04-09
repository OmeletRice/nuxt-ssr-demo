import Vue from 'vue'
import Vuex from 'vuex'
import archives from './modules/archives'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = () => new Vuex.Store({
  modules: {
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