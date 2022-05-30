angular.module('appModule')
  .config(($locationProvider) => {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false,
    });
  })
  .config(($stateProvider) => {
    $stateProvider
      .state({
        name: 'app',
        url: '/?filter',
        templateUrl: './pages/home-page/home-page.html',
        controller: 'homeController',
        controllerAs: 'homePageVm',
        reloadOnSearch: false,
      })
      .state({
        name: 'team-performance',
        url: '/team-performance',
        template: '<v-performance-page></v-performance-page>',
      })
      .state({
        name: 'not-found',
        url: '*path',
        template: '<v-not-found-page></v-not-found-page>',
      });
  });
