<template>
  <section>
    <div class="page-container">
      <el-row :gutter="20">
        <el-col
          :span="6"
        >1</el-col>
        <el-col
          :span="18"
        >
          <Articles />
        </el-col>
      </el-row>
      <div class="count">
        {{ appCount }}
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Articles from '~/components/archive/index.vue'
import { mapState } from 'vuex'

export default {
  components: {
    AppLogo,
    Articles
  },

  asyncData ({store, params}) {
    return store.dispatch('getApp', params)
      .then(res => {
        console.log(res)
        return res
      })
  },

  computed: {
    ...mapState({
      appCount: state => {
        return state.appCount
      }
    })
  }
}
</script>

<style scoped>
.page-container {
  background-color: #daffed21
}
</style>
