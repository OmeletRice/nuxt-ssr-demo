<template>
  <Articles :articles="articles" />
</template>

<script>
import Articles from '~/components/archive/index.vue'
import { mapState } from 'vuex'

export default {
  name: 'articles',

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

<style>

</style>
