https://www.codecademy.com/en/courses/learn-angularjs/lessons/directives/exercises/directives-directives-i?action=lesson_resume&link_content_target=interstitial_lesson
Here's an AngularJS app for a mobile app store:

In the controller MainController.js, there are three objects $scope.move, $scope.shutterbugg, and $scope.gameboard that each contain info about an app, like its title and price.
In the view index.html in the .main section, each app is displayed inside a .card div.
But looking at the view, the same code is written over and over again to display each app. This is repetitive and error-prone. Let's fix this.
1.
In the new file js/directives/appInfo.js, type in this code:

app.directive('appInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/appInfo.html' 
  }; 
});
2.
Include this new JavaScript file in index.html in line 48 as a <script> element.
3.
In the new file js/directives/appInfo.html. Type in this HTML to display an app's info:

<img class="icon" ng-src="{{ info.icon }}"> 
<h2 class="title">{{ info.title }}</h2> 
<p class="developer">{{ info.developer }}</p> 
<p class="price">{{ info.price | currency }}</p>
4.
In index.html, replace the contents of the first .card div with the new <app-info> element:

<div class="card"> 
  <app-info info="move"></app-info> 
</div>
5.
Do the same for the second and third .card divs. Replace their contents with <app-info info="shutterbugg"></app-info> and <app-info info="gameboard"></app-info>

View the AngularJS app in the browser by typing http://localhost:8000.

/* ---------------------------------------------------------------------------- */
https://www.codecademy.com/courses/learn-angularjs/lessons/directives/exercises/directives-directives-ii?action=lesson_resume&link_content_target=interstitial_lesson

What did we just do? We wrote code to teach the browser a new HTML element <app-info>, and used it in the view to display each app's details.

First in js/directives/appInfo.js, we made a new directive. We used app.directive to create a new directive named 'appInfo'. It returns an object with three options:

- restrict specifies how the directive will be used in the view. The 'E' means it will be used as a new HTML element.
- scope specifies that we will pass information into this directive through an attribute named info. The = tells the directive to look for an attribute named info in the <app-info> element, like this:
	<app-info info="shutterbugg"></app-info>
	The data in info becomes available to use in the template given by templateURL.
- templateUrl specifies the HTML to use in order to display the data in scope.info. Here we use the HTML in js/directives/appInfo.html.

Looking at js/directives/appInfo.html, we define the HTML to display details about an app, like its title and price. We use expressions and filters to display the data.

Then in index.html we use the new directive as the HTML element <app-info>. We pass in objects from the controller's scope ($scope.shutterbugg) into the <app-info> element's info attribute so that it displays.
Instructions
Click Next to continue.