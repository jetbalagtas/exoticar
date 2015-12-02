(function () {
  "use strict";

  angular
    .module('cars', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/cars', {
          templateUrl: 'cars/views/list.html',
          controller: 'CarsController'
        })
        .when('/cars/:carId', {
          templateUrl: 'cars/views/detail.html',
          controller: 'CarsController'
        })
        .when('/cars/:carId/edit', {
          templateUrl: 'cars/views/edit.html',
          controller: 'CarsController'
        })
        .when('/addExoticar', {
          templateUrl: 'cars/views/create.html',
          controller: 'CarsController'
        })
        .otherwise({ redirectTo: '/404'
        });
    });


})();
