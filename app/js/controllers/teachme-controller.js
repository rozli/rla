(function () {
  'use strict';

  function TeachmeController($scope, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Как се прави');

    rozLiJs.initialize();
  }

  angular.module('rozLi.controllers')
    .controller('TeachmeController', ['$scope', 'PageTitle', TeachmeController]);
} ());