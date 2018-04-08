<template>
  <div class="app">
    <div class="app-header">
      <header-view />
    </div>
    <div class="app-main">
      <nuxt/>
    </div>
    <div class="app-footer">
      <footer-view />
    </div>
  </div>
</template>

<script>
import {
  Header,
  Footer
} from '~/components/layout'
export default {
  name: 'app',

  components: {
    HeaderView: Header,
    FooterView: Footer
  }
}
</script>

<style lang="scss">
@import '~assets/scss/common/var.scss';

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.container,
.page-container {
  width: 1140px;
  padding: 0;
  margin: 0 auto;
}

.page-container {
  margin-top: $--header-height;
  min-height: 50vh;
}

</style>
