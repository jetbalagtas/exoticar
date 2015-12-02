(function() {
  'use strict';

  angular
    .module('mygarage')
    .controller('BookingController', function ($scope, $location, ExoticarService, BookService, $routeParams) {

      BookService.getBookedCars().success(function (bookedCars) {
        $scope.bookedCars = bookedCars;
        console.log('this is a list of booked cars in mygarage');
      });
      if($routeParams.bookedCarId) {
        BookService.getBookedCar($routeParams.bookedCarId).success(function (bookedCar) {
          console.log("BOOKEDcar", bookedCar);
          $scope.bookedCar = bookedCar;
          console.log('this is a bookedCar: ', $scope.bookedCar);
        });
      }
      $scope.bookedCar = function (bookedcar) {
        console.log(bookedCar);
        BookService.getBookedCar(bookedcar);
        $location.path("/mygarage/:bookedCarId");
      };
});
}());
