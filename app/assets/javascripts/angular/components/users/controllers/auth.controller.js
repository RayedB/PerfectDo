angular
  .module("EffectiveDo")
  .controller('AuthCtrl', function($scope, $rootScope, Auth){
    var authCtrl = this;
    var config = {headers: {'X-HTTP-Method-Override': 'POST'}}

    authCtrl.register = register
    authCtrl.signin = signIn

    // authCtrl.login_credentials = {
    //   email: "",
    //   password: ""
    // };

    authCtrl.credentials = {
      email: "",
      password: "",
      password_confirmation: ""
    };

    function signIn() {
      Auth.login(authCtrl.credentials).then(function(user) {
        console.log(user)
      }, function(error) {
        authCtrl.invalidSignin = true;
        console.error("Nah bruh");
      });
    }

    function register() {
      Auth.register(authCtrl.credentials).then(function(registeredUser) {
        console.log(registeredUser);
      }, function(error) {
        authCtrl.invalidSignin = true;
        console.error("Nah bruh");
      });
    }


  })
