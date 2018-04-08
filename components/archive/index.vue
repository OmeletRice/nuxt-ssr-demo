<template>
  <div class="articles">
    <div class="articles__list">
      <Item v-for="i in 10" :key="i"/>
    </div>
  </div>
</template>

<script>
import Item from './item'
export default {
  name: 'articles',

  components: {
    Item
  }
}
</script>

<style>

</style>
