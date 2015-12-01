(function () {
  "use strict";

  angular
    .module('exoticar')
    .controller('MainController', function ($scope) {

    })
    .controller('CarsController', function ($scope, $location, ExoticarService, BookService, $routeParams) {

      ExoticarService.getExoticars().success(function (cars) {
        $scope.cars = cars;
      });
      BookService.getBookings().success(function (bookedCars) {
        $scope.bookedCars = bookedCars;
      });
      $scope.addExoticar = function (newExoticar) {
        console.log(newExoticar);
        ExoticarService.createExoticar(newExoticar);
        // $scope.greatExoticars = Exoticars;
        $location.path("/cars");
      };
      $scope.bookCar = function (car) {
        BookService.addBookedCar(car);
      };
      if($routeParams.bookCarId) {
      BookService.getSingleCar($routeParams.bookCarId).success(function (bookedCar) {
        $scope.bookedCar = bookedCar;
        console.log('bookedCar: ',$scope.bookedCar);
      });
      }

      // ExoticarService.getSingleCar($routeParams.carId).success(function (car) {
      //   $scope.singleCar = car;
      //   console.log('single', $scope.singleCar);
      // });
    });
})();
