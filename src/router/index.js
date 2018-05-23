import Vue from 'vue'
import Router from 'vue-router'
import Categories from '@/components/Categories'
import AddCategory from '@/components/AddCategory'
import EditCategory from '@/components/EditCategory'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/categories/add',
      name: 'AddCategory',
      component: AddCategory
    },
    {
      path: '/categories/:id/edit',
      name: 'EditCategory',
      component: EditCategory
    }
  ]
})
