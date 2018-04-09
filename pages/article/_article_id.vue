<template>
  <div class="article">
    <div class="article__header">
      <h4>{{ detail.title }}</h4>
    </div>
    <div class="article__body page-container">
      <el-row :gutter="20">
        <el-col :span="18">
          <div class="article__body-content" v-html="detail.body" />    
        </el-col>
        <el-col :span="6">
          <div class="article__body-sidebar"></div>
        </el-col>
      </el-row>
    </div>
    <div class="article__footer">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'artilce-detail',

  // validate ({ params, store }) {
  //   return true
  // },

  fetch ({ store, params, error }) {
    return store.dispatch('archives/getArticleDetail', params)
  },

  computed: {
    ...mapState({
      detail: state => state.archives.detail.data
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/common/var.scss';

$--article-header-height: 50vh;
$--article-header-bgcolor: rgb(235, 237, 244);


.article {
  width: 100%;
  margin-top: $--header-height;

  &__header {
    height: $--article-header-height;
    width: 100%;
    box-shadow: $--box-shadow-light;
    background-color: $--article-header-bgcolor;
    text-align: center;

    font-size: 50px;
    font-weight: bold;
    line-height: $--article-header-height;
  }
  
  &__body {

    &-content {}

    &-sidebar {
      background-color: $--article-header-bgcolor;
      min-height: 10vh;
    }
  }
}
</style>
