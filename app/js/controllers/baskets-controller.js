(function () {
  'use strict';

  function BasketsController($scope, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Сватбени кошници');

    rozLiJs.initialize();
  }

  angular.module('rozLi.controllers')
    .controller('BasketsController', ['$scope','PageTitle', BasketsController]);
}());