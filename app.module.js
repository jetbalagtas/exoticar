
(function () {
  "use strict";

  angular
    .module('exoticar', [
      'ngRoute',
      'underscore',
      'moment'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'MainController'
        })
        .when('/cars', {
          templateUrl: 'views/cars/list.html',
          controller: 'CarsController'
        })
        .when('/cars/:carId', {
          templateUrl: 'views/cars/detail.html',
          controller: 'CarsController'
        })
        .when('/cars/:carId/edit', {
          templateUrl: 'views/cars/edit.html',
          controller: 'CarsController'
        })
        .when('/addExoticar', {
          templateUrl: 'views/cars/create.html',
          controller: 'CarsController'
        })
        .when('/mygarage', {
          templateUrl: 'views/mygarage/list.html',
          controller: 'CarsController'
        })
        .when('/mygarage/:bookCarId', {
          templateUrl: 'views/mygarage/detail.html',
          controller: 'CarsController'
        })
        .when('/addBookedCar', {
          templateUrl: 'views/mygarage/create.html',
          controller: 'CarsController'
        })
        .when('/mygarage/:bookCarId/edit', {
          templateUrl: 'views/mygarage/edit.html',
          controller: 'CarsController'
        });
    });

  angular
    .module('underscore', [])
    .factory('_', function ($window) {
      return $window._;
    });
  angular
    .module('moment', [])
    .factory('moment', function ($window) {
      return $window.moment;
    });

})();
