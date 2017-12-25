import Vue from 'vue'
import Router from 'vue-router'
import rating from 'components/rating/rating'
import good from 'components/good/good'
import seller from 'components/seller/seller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/good',
      component: good
    },
    {
      path: '/rating',
      component: rating
    },
    {
      path: '/seller',
      component: seller
    }
  ],
  linkActiveClass: 'active'
})
