<template>
  <div class="articles__list-item">
    <div class="item-content">
      
      <div class="item-info">
        <div class="item-info__thumb">
          <!-- <nuxt-link :to="`/article/${article.id}`"> -->
            <div class="item-info__thumb-img"
              :style="{ backgroundImage: `url('http://via.placeholder.com/350x150')`}"
            />
            <!-- <img class="item-info__thumb-img"
              src="http://via.placeholder.com/350x150"
              alt=""
              title=""
            > -->
          <!-- </nuxt-link> -->
        </div>
        <div class="item-info__tags">
          <span v-for="(tag, index) in article.tags"
            :key="index">
            {{ tag }}
          </span>
        </div>
      </div>

      <div class="item-body">
        <div class="item-body__title">
          <nuxt-link :to="`/article/${article.id}`"
            :title="article.title"
          >{{ article.title || 'title'}}</nuxt-link>
        </div>
        <div class="item-body__abstract">
          <p>{{article.abstract || 'abstract'}}</p>
        </div>
        <div class="item-body__meta">
          <span class="meta-date">
            <nuxt-link
              :to="`/date/${article.createdAt}`"
            >{{ article.createdAt }}</nuxt-link>
          </span>
          <span class="meta-views">
            {{article.views}}
          </span>
          <span class="meta-comment">
            {{article.comment}}
          </span>
          <span class="meta-likes">
            {{article.likes}}
          </span>
          <span class="meta-categories">
            <nuxt-link
              v-if="article.categories && article.categories.length"
              :to="`/category/${article.slug}`"
              v-for="(cate, index) in article.categories"
              :key="index"
            >{{cate}}</nuxt-link>
            <span v-else>未分类</span>
          </span>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-list-item',

  props: {
    article: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/common/var.scss';

$--article-item-height: 300px;

$--article-item-thumb-size: 200px;

$--article-item-title-height: 50px;

.articles__list-item {
  width: 100%;
  padding: 10px;
  height: $--article-item-height;

  & + .articles__list-item {
    margin-top: 20px;
  }
}

.item-content {
  background-color: $--color-white;
  height: $--article-item-height;
  border-radius: $--border-radius-base;
  transition: $--all-transition;
  box-shadow: 0px;
  border: $--border-default;

  display: flex;
  overflow: hidden;

  &:hover {
    box-shadow: $--box-shadow-light;
  }

  &:hover .item-info__thumb-img {
    background-position-x: left;
  }
}

.item-info {
  width: $--article-item-thumb-size;
  height: $--article-item-height;
  margin-right: 10px;

  &__thumb {
    width: $--article-item-thumb-size;
    height: $--article-item-thumb-size;

    &-img {
      width: 100%;
      height: 100%;
      background-position-y: center;
      background-position-x: right;
      background-repeat: no-repeat;
      background-size: cover;

      transition: all 1s cubic-bezier(.645,.045,.355,1);
    }
  }

  &__tags {
    width: $--article-item-thumb-size;
    padding: 5px;
  }
}


.item-body {
  padding: 10px;
  width: 100%;
  position: relative;

  &__title {
    width: 100%;
    height: $--article-item-title-height;
    line-height: $--article-item-title-height;
    text-align: center;

    font-size: 20px;
    font-weight: bold;
    
    & a {
      text-decoration: none;
      color: $--color-black;
    }
  }

  &__abstract {
    font-size: 13px;
    line-height: 24px;
    margin-bottom: 8px;
  }

  &__meta {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
}

.item-body__meta {

  & .meta-date {
    
    & a {
      text-decoration: none;
    }
  }

  & .meta-views {
    margin-left: 5px;
  }

  & .meta-comment {
    margin-left: 5px;    
  }

  & .meta-likes {
    margin-left: 5px;    
  }

  & .meta-categories {
    margin-left: 5px;    
  }
}
</style>
