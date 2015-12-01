(function () {
  "use strict";

  angular
    .module('exoticar')
    .controller('MainController', function ($scope) {

    })
    .controller('CarsController', function ($scope, ExoticarService, BookService, $routeParams) {

      ExoticarService.getSingleCar($routeParams.carId).success(function (car) {
        $scope.singleCar = car;
        console.log('single', $scope.singleCar);
      });
    });
})();
