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
          templateUrl: 'home.html',
          controller: 'MainController'
        })
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
        .when('/mygarage', {
          templateUrl: 'mygarage/views/list.html',
          controller: 'CarsController'
        })
        .when('/mygarage/:bookCarId', {
          templateUrl: 'mygarage/views/detail.html',
          controller: 'CarsController'
        })
        .when('/404', {
          templateUrl: '404.html'
        })
        .otherwise({ redirectTo: '/404'
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
