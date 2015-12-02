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
    });
    


})();
