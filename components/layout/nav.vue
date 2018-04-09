<template>
  <div class="aside-nav">
    <nav class="nav-list">
      <nuxt-link
        class="nav-list__item"
        :to="`/`"
        exact>
        <span>Home</span>
      </nuxt-link>
      <nuxt-link
        class="nav-list__item"
        :to="`/articles`"
        exact>
        <span>articles</span>
      </nuxt-link>
      <nuxt-link
        class="nav-list__item"
        :to="`/project`"
        exact>
        <span>/project</span>
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
