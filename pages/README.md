# PAGES

This directory contains your Application Views and Routes.
The framework reads all the .vue files inside this directory and creates the router of your application.

More information about the usage of this directory in the documentation:
https://nuxtjs.org/guide/routing

```javascript
router: {
  routes: [
    {
      path: '/',
      components: 'pages/index.vue',
      name: 'index',
      // children: {}
    },
    {
      path: '/article',
      components: 'page/article.vue',
      name: 'caticle'
    },
    {
      path: '/project',
      components: 'page/project.vue',
      name: 'caticle'
    },
    {
      path: '/article/:article_id',
      components: 'pages/article/_article_id.vue'
    }
  ]
}
```