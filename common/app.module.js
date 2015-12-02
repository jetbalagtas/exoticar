(function () {
  "use strict";

  angular
    .module('exoticar', [
      'ngRoute',
      'underscore',
      'moment',
      'cars',
      'mygarage'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'home.html',
          controller: 'MainController'
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
