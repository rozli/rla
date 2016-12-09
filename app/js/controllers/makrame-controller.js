(function () {
  'use strict';

  function MakrameController($scope, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Макрамета');

    rozLiJs.initialize();
  }

  angular.module('rozLi.controllers')
    .controller('MakrameController', ['$scope','PageTitle', MakrameController]);
}());