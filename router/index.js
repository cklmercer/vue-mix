import Home from './../components/home'
import Test from './../components/test'

export default {
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
}
