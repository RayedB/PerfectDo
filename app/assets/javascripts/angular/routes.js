angular
  .module("EffectiveDo")
  .config(function($stateProvider,$urlRouterProvider){
    $stateProvider
      .state("home", {
        url: '/home',
        templateUrl:'angular/components/home/views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'homeCtrl',
        resolve: {
          currentUser: ['$q', '$state', 'Auth', function($q, $state, Auth) {
            var d = $q.defer();
            Auth.currentUser().then(function(user) {

              d.resolve(user);
            })
            .then(function(user) {
              d.resolve(user);
            }, function(error) {
              $state.go('login');
            });
            return d.promise;
          }]
        }
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
    $urlRouterProvider.otherwise("/login");
  })
