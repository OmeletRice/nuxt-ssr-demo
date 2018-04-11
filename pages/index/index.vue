<template>
  <div class="index">
    <div class="index__carousel">
      <el-carousel
        :interval="5000"
        arrow="never"
      >
        <el-carousel-item
          v-for="item in carousel"
          :key="item.link"
        >
          <nuxt-link
            class="carousel-item__link"
            :to="`${item.link}`"
            :style="{
              backgroundImage: `url(${item.imgSrc})`
            }"
          >
            <p v-if="!item.src">{{item.alt}}</p>
          </nuxt-link>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="index__assort-card">
      <assort-card
        v-for="item in assort"
        :key="item.type"
      >
        <p>{{item.title}}</p>
      </assort-card>
    </div>
  </div>
</template>

<script>
import { mapState} from 'vuex'
import AssortCard from '~/components/cards/assort-card'

export default {
  name: 'app-index',

  components: {
    AssortCard
  },

  data () {
    return {
       assort: [
         {
           title: 'Home Control',
           link: '/home-control'
         },
         {
           title: 'Home Control',
           link: '/home-control'
         },
         {
           title: 'Home Control',
           link: '/home-control'
         },
         {
           title: 'Home Control',
           link: '/home-control'
         }
       ]
    }
  },

  asyncData ({ store, params }) {
    return store.dispatch('app/getCarousel')
  },

  computed: {
    ...mapState({
      carousel: state => {
        return state.app.carousel
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/common/var.scss';

$--assort-card-height: 100px;

.index__carousel {
  margin-top: 20px;
  background-color: rgb(221, 221, 221);
}

.carousel-item {

  &__link {
    display: block;
    position: relative;
    height: 100%;
  }

  &__img {
    width: 100%;
  }
}

.index__assort-card {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;

  & .assort-card {
    width: 100%;
    margin-right: 10px;
    font-size: 16px;
    height: $--assort-card-height;
    line-height: $--assort-card-height;
    text-align: center;
  }

  & .assort-card:last-child {
    margin-right: 0;
  }
}
</style>
