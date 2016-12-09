(function () {
  'use strict';

  function RocksController($scope, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Декупаж върху камък');

    rozLiJs.initialize();
  }

  angular.module('rozLi.controllers')
    .controller('RocksController', ['$scope', 'PageTitle', RocksController]);
} ());