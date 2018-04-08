import Vue from 'vue'

import { Row, Col } from 'element-ui'
import 'element-ui/lib/theme-chalk/row.css'
import 'element-ui/lib/theme-chalk/col.css'

export default () => {
  Vue.use(Row)
  Vue.use(Col)
}