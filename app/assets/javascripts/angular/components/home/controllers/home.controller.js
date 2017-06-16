angular
  .module("EffectiveDo")
  .controller('HomeCtrl', ['$scope','$rootScope','Auth', 'currentUser', function($scope, $rootScope, Auth, currentUser){
    var homeCtrl = this;
    console.log("homeCtrl");
  }]);
