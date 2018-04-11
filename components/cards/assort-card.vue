<template>
  <div class="assort-card"
    :class="[{'is-hover-shadow': shadow === 'hover'}]"
  >
    <div class="assort-card__header">
      <slot name="header" />
    </div>
    <div class="assort-card__body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'assory-card',

  props: {
    shadow: {
      type: String,
      default: 'hover'
    }
  }
}
</script>

<style lang="scss">

.assort-card {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: .3s;

  &.is-hover-shadow:hover {
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
}
</style>
