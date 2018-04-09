<template>
  <div class="articles">
    <div class="articles__list">
      <Item
        v-for="art in articles"
        :key="art.id.toString()"
        :article="art"
      />
    </div>
  </div>
</template>

<script>
import Item from './item'
export default {
  name: 'articles',

  props: {
    articles: Array
  },

  components: {
    Item
  }
}
</script>

<style>

</style>
