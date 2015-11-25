(function () {
  "use strict";

  angular
    .module('exoticar')
    .controller('MainController', function ($scope) {

    })
    .controller('CarsController', function ($scope, ExoticarService, BookService, $routeParams) {

      ExoticarService.getExoticars().success(function (cars) {

        $scope.cars = cars;
      });
      BookService.getBookings().success(function (bookedCars) {
        $scope.bookedCars = bookedCars;
      });
      $scope.bookCar = function (car) {
        BookService.addBookedCar(car);
      };
      if($routeParams.bookCarId) {
      BookService.getSingleCar($routeParams.bookCarId).success(function (bookedCar) {
        $scope.bookedCar = bookedCar;
        console.log('bookedCar: ',$scope.bookedCar);
      });
    }

      // ExoticarService.getSinglePhoto($routeParams.photoId).success(function (photo) {
      //   $scope.singlePhoto = photo;
      // });
      // console.log('single', $scope.singlePhoto);
    });
})();
