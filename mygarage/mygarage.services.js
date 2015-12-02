(function() {
  'use strict';

  angular
  .module('mygarage')
  .factory('BookService', function ($http) {
    var url = 'http://tiny-tiny.herokuapp.com/collections/ng-exoticar-jet-bookings';
    var getBookedCars = function () {
      return $http.get(url);
    };
    // var addBookedCar = function (car) {
    //   $http.post(url, car).success(function (res) {
    //     console.log(res);
    //   });
    // };
    var getBookedCar = function (bookedCarId) {
      console.log('JELLO');
      var newUrl = url + '/' + bookedCarId;
      console.log(newUrl);
      return $http.get(newUrl);
    };
    var deleteBookedCar = function (carId) {
      $http.delete(url + '/' + carId).then(function (res) {
        console.log(res);
      });
    };
    var updateBookedCar = function (car) {
      $http.put(url + '/' + car._id, car).then(function (res) {
        console.log(res);
      });
    };
    return {
      getBookedCars: getBookedCars,
      deleteCar: deleteBookedCar,
      updateBookedCar: updateBookedCar,
      getBookedCar: getBookedCar,
    };

  });

}());
