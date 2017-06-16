angular
  .module("EffectiveDo")
  .config(function($stateProvider,$urlRouterProvider){
    $stateProvider
      .state("home", {
        url: '/home',
        templateUrl:'angular/components/home/views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'homeCtrl'
      })
      .state("login", {
        url: '/login',
        templateUrl:'angular/components/users/views/login.html',
        controller: 'AuthCtrl',
        controllerAs: 'authCtrl'
      })
      .state("register", {
        url: '/register',
        templateUrl:'angular/components/users/views/register.html',
        controller: 'AuthCtrl',
        controllerAs: 'authCtrl'
      })
    $urlRouterProvider.otherwise("/home");
  })
