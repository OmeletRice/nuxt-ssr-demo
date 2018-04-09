<template>
  <div class="person-card">
    <div class="card">
      <div class="card__header"></div>
      <p class="card__name">某某某</p>
      <p class="card__name-en">KangKangKang</p>
      <p class="card__resume">
        爱好UX/UI设计，注重界面交互，Web前端开发者
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'person-card'
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/common/var.scss';

$--card-portrait-size: 120px;

.person-card {
  margin: 0 auto;
  padding: 10px;
}

.card {
  text-align: center;
  box-shadow: $--box-shadow-light;
  border-radius: $--border-radius-base;
  background-color: $--color-white;
  overflow: hidden;
  padding: 20px;

  &__header {
    height: $--card-portrait-size;
    width: $--card-portrait-size;
    border-radius: $--border-radius-circle;
    background-color: $--color-primary-light-1;
    margin: 30px auto 10px auto;
  }

  &__name {
    font-size: 18px;
    margin-bottom: 2px;
  }

  &__name-en {
    font-size: 16px;
    margin-bottom: 20px;
  }

  &__resume {
    text-align: left;
  }
}
</style>
