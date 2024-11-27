import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
    path: '',
    name: 'toolbar',
    //แบบนี้ performance ดีกว่า
    component: () => import('../views/Toolbar.vue'),
    children:[
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/mycart',
        name: 'mycart',
        component: () => import('../views/Mycart.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/User.vue')
      },
      {
        path: '/manage-product',
        name: 'manageproduct',
        component: () => import('../views/Manageproduct.vue')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('../views/Orders.vue')
      },
      {
        path: '/me',
        name: 'me',
        //แบบนี้ performance ดีกว่า
        component: () => import('../views/Me.vue')
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('../views/Contact.vue')
      },
      {
        path: '/simple',
        name: 'simple',
        component: () => import('../views/Simple.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
      },
      {
        path: '/grade',
        name: 'grade',
        component: () => import('../views/Grade.vue')
      },
      {
        path: '/apicon',
        name: 'apicon',
        component: () => import('../views/Apicon.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
