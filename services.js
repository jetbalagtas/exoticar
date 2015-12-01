(function () {
  "use strict";

  angular
    .module('exoticar')
    .factory('ExoticarService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/ng-exoticar-jet';
      var addExoticar = function (newExoticar) {
        $http.post(url, newExoticar).then(function (res) {
          console.log(res);
        });
      };
      var getExoticars = function () {
        return $http.get(url);
      };
      var getSingleCar = function (carId) {
        console.log('HELLO');
        var newUrl = url + '/' + carId;
        console.log(newUrl);
        return $http.get(newUrl);
      };
      return {
        createExoticar: addExoticar,
        getExoticars: getExoticars,
        getSingleCar: getSingleCar,
      };
    })

    .factory('BookService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/ng-exoticar-jet-bookings';
      var getBookedCars = function () {
        return $http.get(url);
      };
      var addBookedCar = function (car) {
        $http.post(url, car).success(function (res) {
          console.log(res);
        });
      };
      var getSingleCar = function (carId) {
        console.log('HELLO');
        var newUrl = url + '/' + carId;
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
        getBookings: getBookedCars,
        getSingleCar: getSingleCar,
        deleteCar: deleteBookedCar,
        updateBookedCar: updateBookedCar,
        addBookedCar: addBookedCar
      };

    });
})();
