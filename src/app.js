export class App {
  configureRouter(config, router) {
    config.title = 'Cookbook Aurelia 1.0';
    config.map([
      { route: ['', 'home'], name: 'home',      moduleId: 'components/home/home',      nav: true, title: 'Home' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
