import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/page/:pageNum': {
    name: 'page',
    component: {}
  }
})

router.redirect({
  '/': '/page/1'
})

router.beforeEach((transition) => {
  if (transition.to.path !== '/page/0') {
    transition.next()
  } else {
    transition.abort()
  }
})

/* eslint-disable no-new */

router.start(App, 'app')
