angular.module("navbar", [])

  /**
   * The directive that will provide the navbar template
   * It needs a tabs arg Exemple
   * tabs = [
   * { title:'Tab1', url:'home.tab1' },
   * { title:'Tab2', url:'home.tab2' }]
   */
  .directive('navbar', [function() {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: "angular/shared/navbar/view/navbar.html",
      scope: {
        "tabs": "="
      },
      link: function(scope, element, attrs) {

      }
    }
  }])
