import Vue from 'vue'

import {
  Row,
  Col,
  Carousel,
  CarouselItem
} from 'element-ui'
import 'element-ui/lib/theme-chalk/row.css'
import 'element-ui/lib/theme-chalk/col.css'
import 'element-ui/lib/theme-chalk/carousel.css'
import 'element-ui/lib/theme-chalk/carousel-item.css'

export default () => {
  Vue.use(Row)
  Vue.use(Col)
  Vue.use(Carousel)
  Vue.use(CarouselItem)
}