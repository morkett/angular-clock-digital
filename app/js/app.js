function MainRouter ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../states/home.html'
    });


  $urlRouterProvider.otherwise('/');

}

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];




angular
  .module('myApp', ['ui.router','firebase'])
  .constant('API_URL', 'http://localhost:3000')
  .config(MainRouter);
