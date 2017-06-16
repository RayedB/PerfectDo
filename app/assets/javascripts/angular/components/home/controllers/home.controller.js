angular
  .module("EffectiveDo")
  .controller('HomeCtrl', ['$scope','$rootScope','$state','Auth', 'currentUser', function($scope, $rootScope,$state, Auth, currentUser){
    var homeCtrl = this;
    console.log("homeCtrl");
    console.log(currentUser);

    //signOut();


    function signOut() {
      Auth.logout().then(function(user) {
        $state.go('login');
      }, function(error) {
      });
    }

  }]);
