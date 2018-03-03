    var app = angular.module('app', ['ngRoute']);
    // configure our routes
    app.config(function($routeProvider,$locationProvider) {
      $locationProvider.hashPrefix('');
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : './pages/signup.php'
            })

            // route for the about page
            .when('/signin', {
                templateUrl : './pages/signin.php'
            })

            // route for the contact page
            .when('/course', {
                templateUrl : './pages/course.php',
                controller: 'courseController',

            })
            
    });
