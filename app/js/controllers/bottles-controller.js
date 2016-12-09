(function () {
  'use strict';

  function BottlesController($scope, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Декупаж/Бутилки');

    rozLiJs.initialize();
  }

  angular.module('rozLi.controllers')
    .controller('BottlesController', ['$scope','PageTitle', BottlesController]);
}());