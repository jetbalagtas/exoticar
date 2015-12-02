(function () {
  "use strict";

  angular
    .module('mygarage', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/mygarage', {
          templateUrl: 'mygarage/views/list.html',
          controller: 'BookingController'
        })
        .when('/mygarage/:bookedCarId', {
          templateUrl: 'mygarage/views/detail.html',
          controller: 'BookingController'
        })
        .otherwise({ redirectTo: '/404'
        });
    });

})();
