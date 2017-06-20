angular
  .module("EffectiveDo")
  .controller('AuthCtrl', function($scope, $rootScope, $state, Auth){
    var authCtrl = this;
    var config = {headers: {'X-HTTP-Method-Override': 'POST'}}

    authCtrl.register = register;
    authCtrl.signin = signIn;

    authCtrl.credentials = {
      email: "",
      password: "",
          };

    function signIn() {
      Auth.login(authCtrl.credentials,config).then(function(user) {
        console.log(Auth.isAuthenticated())
        console.log(user)
        $state.go('home');
      }, function(error) {
        //authCtrl.invalidSignin = true;
        console.error("Nah bruh");
      });

    }

    function register() {
      if (authCtrl.credentials.password == authCtrl.credentials.password_confirmation){
        Auth.register(authCtrl.credentials).then(function(registeredUser) {
          $state.go('home');
        }, function(error) {
          authCtrl.invalidSignin = true;
          console.error("Nah bruh");
        });
      }
      else {
        console.log("password_confirmation incorrect")
      }
    }


  })
