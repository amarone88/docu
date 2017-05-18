app.directive('installApp', function() { 
  return { 
    restrict: 'E',											/* E = as a HTML element */ 
    scope: { installApp: '=' }, 							/* Value will be passed through "info" attribute in the "app-info" attribute */
    templateUrl: 'js/directives/installApp.html',			/* Ocio lì, la virgola alla fine del valore di templateUrl è come le altre, ossia link è la quarta opzione */
    
    link: function(scope, element, attrs) {
      scope.buttonText = "Install",
      scope.installed = false,

      scope.download = 
    	function() {
        element.toggleClass('btn-active');
        if(scope.installed) {
          scope.buttonText = "Install";
          scope.installed = false;
        } else {
          scope.buttonText = "Uninstall";
          scope.installed = true;
        }
      }
    } 
  }; 
});