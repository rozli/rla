(function () {
  'use strict';

  function ChildrenController($scope, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Детски столчета');

    rozLiJs.initialize();
  }

  angular.module('rozLi.controllers')
    .controller('ChildrenController', ['$scope','PageTitle', ChildrenController]);
}());