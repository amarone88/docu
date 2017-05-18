app.directive('ecciucCiamelo', function() { 
  return { 
    restrict: 'E',									/* E = as a HTML element */ 
    scope: { infuz: '=' }, 							/* Value will be passed through "info" attribute in the "app-info" attribute */
    templateUrl: 'js/directives/appInfo.html' 
  }; 
});