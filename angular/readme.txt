https://www.codecademy.com/courses/learn-angularjs/lessons/your-first-app/exercises/your-first-app-hello-angularjs-i?action=lesson_resume
Lesson 1

AngularJS is a JavaScript web framework aimed to make web apps simple to build and easy to maintain.

We'll start by building a simple AngularJS app. After making this app, we'll generalize a few steps that can be used to build more complex apps. By the end of this course, you'll be able to use this sequence of steps to jumpstart your own AngularJS apps.

1.
Let's get started by making a simple AngularJS app. We'll explain each step in the next exercise.
In app.js, type in the contents exactly as you see here:
var app = angular.module("myApp", []);

2.
Open up index.html. Modify the <body> tag so it looks like this:
<body ng-app="myApp">

3.
Open up js/controllers/MainController.js. Type in the contents exactly as you see here:
app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Top Sellers in Books'; 
}]);

4.
Go to index.html. Modify the <div class="main"> tag so it looks like this:
<div class="main" ng-controller="MainController">

5.
In index.html inside <div class="main">, modify the <h1> element so it looks like this:
<h1>{{ title }}</h1>
View the AngularJS app in the browser by visiting http://localhost:8000. The "Top Sellers in Books" content appears as the heading of the page.

_____
Awesome! You built an AngularJS app. How does it work?

In app.js, we created a new module named myApp. A module contains the different components of an AngularJS app.
Then, in index.html we added <body ng-app="myApp">. The ng-app is called a directive. It tells AngularJS that the myApp module will live within the <body> element, termed the application's scope. In other words, we used the ng-app directive to define the application scope.
In MainController.js we created a new controller named MainController. A controller manages the app's data. Here we use the property title to store a string, and attach it to $scope.
Then, in index.html, we added <div class="main" ng-controller="MainController">. Like ng-app, ng-controller is a directive that defines the controller scope. This means that properties attached to $scope in MainController become available to use within <div class="main">.
Inside <div class="main"> we accessed $scope.title using {{ title }}. This is called an expression. Expressions are used to display values on the page.
The value of title showed up when we viewed the app in the browser.

