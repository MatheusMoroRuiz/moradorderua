
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Inicio.vue')},
      { path: 'relatar', component: () => import('src/pages/Relatar.vue')},
      { path: 'localizacao', component: () => import('src/pages/Localizacao.vue')},
      { path: 'ongs', component: () => import('src/pages/Ongs.vue')}
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
      { path: '', component: () => import('src/pages/Cadastro.vue')},
      { path: '/doacao', component: () => import('src/pages/Doacao.vue')},
      { path: '/ajuda', component: () => import('src/pages/Ajuda.vue')},
      { path: '/configuracoes', component: () => import('src/pages/Configuracoes.vue')},
      { path: '/politicaprivacidade', component: () => import('src/pages/PoliticaPrivacidade.vue')},
      { path: '/editarperfil', component: () => import('src/pages/EditarPerfil.vue')}
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
