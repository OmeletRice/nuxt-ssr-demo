<template>
  <footer class="footer">
    <div class="container">
      <div class="power">
        <p>Power by nuxt.js</p>
        <p>© 2018 Kangschampagen</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'layout-footer'
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/common/var.scss';

$--footer-height: 200px;
$--footer-bgcolor: #185dc4;

.footer {
  height: $--footer-height;
  text-align: center;
  background-color: $--footer-bgcolor;
  display: flex;
  justify-content: center;
  align-items: center;

  & .power {
    margin: 0 auto;
    color: $--color-white;
  }
}
</style>
