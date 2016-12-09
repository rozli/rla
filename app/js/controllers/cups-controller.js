(function () {
  'use strict';

  function CupsController($scope, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Декупаж върху чаши');

   rozLiJs.initialize();
  }

  angular.module('rozLi.controllers')
    .controller('CupsController', ['$scope','PageTitle', CupsController]);
}());