function MainRouter ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('digital', {
      url: '/digital',
      templateUrl: '../states/home.html'
    })
    .state('analogue', {
      url: '/analogue',
      templateUrl: '../states/analogue.html'
    });


  $urlRouterProvider.otherwise('/digital');

}

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];




angular
  .module('myApp', ['ui.router', 'ds.clock'])
  .constant('API_URL', 'http://localhost:3000')
  .config(MainRouter);
