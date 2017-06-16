angular
  .module("EffectiveDo")
  .controller('HomeCtrl', function($scope, $rootScope, Auth){
    var homeCtrl = this;
    var config = {headers: {'X-HTTP-Method-Override': 'POST'}}

    homeCtrl.register = register
    homeCtrl.signin = signIn

    homeCtrl.credentials = {
      email: "",
      password: ""
    };

    function signIn() {
      Auth.login(homeCtrl.credentials).then(function(user) {
        console.log("logged in successfully")
      }, function(error) {
        homeCtrl.invalidSignin = true;
        console.error("Nah bruh");
      });
    }

    function register() {
      Auth.register(homeCtrl.credentials).then(function(user) {
        console.log("logged in successfully")
      }, function(error) {
        homeCtrl.invalidSignin = true;
        console.error("Nah bruh");
      });
    }

  })
