import layout from '@/layout'
export default {
  path: '/social',
  component: layout,
  lable: 'social',
  children: [
    {
      path: '',
      name: 'social',
      component: () => import('@/views/social'),
      meta: {
        title: '社保',
        icon: 'table'
      }
    }
  ]
}
