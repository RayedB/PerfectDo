app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/infographie1', {
        templateUrl: "templateInfographie1.html",
        controller: 'todoCtrl',
        controllerAs: 'authenticationCtrl',
    })
    .otherwise({
      redirectTo: '/login'
    });
}]);
