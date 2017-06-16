angular
  .module("EffectiveDo")
  .controller('HomeCtrl', ['$scope','$rootScope','$state','Auth', 'currentUser', function($scope, $rootScope,$state, Auth, currentUser){
    var homeCtrl = this;
    console.log("homeCtrl");
    console.log(currentUser);

    homeCtrl.tabs = [
      { title:'Home', url:'home.welcome' },
      { title:'Models', url:'home.models.all' }
      // { title:'Products', view_url:'home.products'}
    ];

    function signOut() {
      Auth.logout().then(function(user) {
        $state.go('login');
      }, function(error) {
      });
    }

  }]);
