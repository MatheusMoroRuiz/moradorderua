
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/TelaInicio.vue')},
      { path: 'relatar', component: () => import('pages/TelaRelatar.vue')},
      { path: 'localizacao', component: () => import('pages/TelaLocalizacao.vue')},
      { path: 'ongs', component: () => import('pages/TelaOngs.vue')}
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue')}
    ]
  },
  {
    path: '/cadastro',
    component: () => import('layouts/CadastroLayout.vue'),
    children: [
      { path: '', component: () => import('pages/TelaCadastro.vue')}
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
