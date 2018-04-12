<template>
  <div class="person-card">
    <div class="card">
      <div class="card__profile">
        <img :src="info.profileSrc" alt="" />
      </div>
      <p class="card__name">{{ info.name }}</p>
      <p class="card__name-en">{{ info.enName }}</p>
      <p class="card__resume">
        {{ info.resume }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'person-card',

  props: {
    info: {
      type: Object,
      default () {
        return {
          profileSrc: '',
          name: '',
          enName: '',
          resume: ''
        }
      }
    }
  }
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

  &__profile {
    height: $--card-portrait-size;
    width: $--card-portrait-size;
    border-radius: $--border-radius-circle;
    background-color: $--color-primary-light-1;
    margin: 30px auto 30px auto;
    overflow: hidden;

    & img {
      width: 100%;
      height: 100%;
    }
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
    margin-bottom: 10px;
  }
}
</style>
