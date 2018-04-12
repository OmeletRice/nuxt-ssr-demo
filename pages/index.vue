<template>
  <section>
    <div class="page-container">
      <el-row :gutter="20">
        <el-col class="aside" :span="6">
          <person-card :info="masterInfo"/>
          <aside-nav />
        </el-col>
        <el-col :span="18">
          <nuxt-child />
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
import PersonCard from '~/components/person-card/index.vue'
import AsideNav from '~/components/layout/nav.vue'
import { mapState } from 'vuex'

export default {
  components: {
    PersonCard,
    AsideNav
  },

  fetch ({ store, params }) {
    return store.dispatch('app/getMasterInfo')
  },
  
  computed: {
    ...mapState({
      masterInfo: state => state.app.masterInfo
    })
  }
}
</script>

<style scoped>
.page-container {
  /* background-color: #daffed21 */
}

.aside {
  text-align: center;
  padding-top: 10px;
}
</style>
