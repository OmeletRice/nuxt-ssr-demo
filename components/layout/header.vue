<template>
  <header class="header">
    <nav class="nav-bar container">
      <p>This is Header</p>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'layout-header'
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/common/var.scss';

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $--header-height;
  line-height: $--header-height;
  background-color: $--color-primary-light-1;
  z-index: 150;

  .nav-bar {
    background-color: #daffed21
  }
}
</style>
