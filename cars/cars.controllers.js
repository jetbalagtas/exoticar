(function () {
  "use strict";

  angular
    .module('cars')
    .controller('carsController', function ($scope) {

    })
    .controller('CarsController', function ($scope, $location, ExoticarService, BookService, $routeParams) {

      ExoticarService.getExoticars().success(function (cars) {
        $scope.cars = cars;
        console.log('this is showing the list of cars in the fleet');
      });
      if($routeParams.carId) {
        ExoticarService.getSingleCar($routeParams.carId).success(function(singleCar) {
          console.log("SINGLE",singleCar);
          $scope.car = singleCar;
          console.log('this is a single car: ', $scope.singleCar);
        });
      }
      $scope.addExoticar = function (newExoticar) {
        console.log(newExoticar);
        ExoticarService.createExoticar(newExoticar);
        // $scope.greatExoticars = Exoticars;
        $location.path("/cars");
      };

    });
})();
