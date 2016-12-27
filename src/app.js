export class App {
  configureRouter(config, router) {
    config.title = 'Cookbook Aurelia 1.0';
    config.map([
      { route: ['', 'home'], name: 'home',      moduleId: 'components/home/home',      nav: true, title: 'Home' },
      { route: 'pastas', name: 'pastas',      moduleId: 'components/recipe/pastas',      nav: true, title: 'Pastas' },
      { route: 'salads', name: 'salads',      moduleId: 'components/recipe/salads',      nav: true, title: 'Salads' },
      { route: 'manage', name: 'manage',      moduleId: 'components/manage/recipe',      nav: true, title: 'Manage Recipes' }
      // { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' }
    ]);

    this.router = router;
  }
}
