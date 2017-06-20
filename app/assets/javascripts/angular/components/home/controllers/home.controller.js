angular
  .module("EffectiveDo")
  .controller('HomeCtrl', ['$scope','$rootScope','$state','Auth', 'currentUser', function($scope, $rootScope,$state, Auth, currentUser){
    var homeCtrl = this;
    console.log("homeCtrl");
    homeCtrl.tabs = [
      { title:'Home', url:'home.welcome' },
      { title:'Profile', url:'home.models.all' }
      // { title:'Products', view_url:'home.products'}
    ];

    homeCtrl.signOut = signOut;

    function signOut() {
      console.log("signin out");
      Auth.logout().then(function(user) {
        $state.go('login');
      }, function(error) {
      });
    }

  }]);
