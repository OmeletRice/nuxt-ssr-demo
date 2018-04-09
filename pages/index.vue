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
          <Articles :articles="articles" />
        </el-col>
      </el-row>
      <!-- <div class="count">
        {{ articles }}
      </div> -->
    </div>
  </section>
</template>

<script>
import Articles from '~/components/archive/index.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Articles
  },

  asyncData ({ store, params }) {
    return store.dispatch('archives/getArticles')
  },

  computed: {
    ...mapState({
      articles: state => {
        return state.archives.articles
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
