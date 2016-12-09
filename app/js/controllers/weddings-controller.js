(function () {
  'use strict';

  function WeddingsController($scope, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Сватбени');

    rozLiJs.initialize();
  }

  angular.module('rozLi.controllers')
    .controller('WeddingsController', ['$scope', 'PageTitle', WeddingsController]);
} ());