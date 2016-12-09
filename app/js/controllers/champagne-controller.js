(function () {
  'use strict';

  function ChampagneController($scope, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Сватбено шампанско');

    rozLiJs.initialize();
  }

  angular.module('rozLi.controllers')
    .controller('ChampagneController', ['$scope','PageTitle', ChampagneController]);
}());