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
      >
        <span>articles</span>
      </nuxt-link>
      <nuxt-link
        class="nav-list__item"
        :to="`/project`"
      >
        <span>project</span>
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'aside-nav'
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/common/var.scss';

$--aside-nav-item-height: 40px;

.aside-nav {
  margin: 10px;
}

.nav-list {
  box-shadow: $--box-shadow-light;
  padding: 20px;
  background-color: $--color-white;
  border-radius: $--border-radius-base;

  &__item {
    display: block;
    height: $--aside-nav-item-height;
    line-height: $--aside-nav-item-height;
    margin: 5px 0;
    border-radius: $--border-radius-base;
    color: #4b4b4b;
    transition: $--all-transition;
    text-decoration: none;
    font-weight: bold;
  
    &:hover {
      background-color: hsla(0, 0%, 0%, 0.01);
      color: #000000;
    }
  }
}
</style>
