<template>
  <div class="artciles-wrap">
    <div class="articles-bar">
      <filter-bar />
    </div>
    <Articles :articles="articles" />
  </div>
</template>

<script>
import Articles from '~/components/archive/index.vue'
import FilterBar from '~/components/filter-bar/index.vue'
import { mapState } from 'vuex'

export default {
  name: 'articles',

  components: {
    Articles,
    FilterBar
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

<style lang="scss">
@import '~assets/scss/common/var.scss';

.articles-bar {
  margin: 20px 10px;
  box-shadow: $--box-shadow-light;
}
</style>
