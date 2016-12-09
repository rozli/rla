(function () {
  'use strict';

  function KamenController($rootScope, $scope, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Лосът Камен');

    rozLiJs.initialize();
    rozLiJs.initializeZoom("kamen");
  }

  angular.module('rozLi.controllers')
    .controller('KamenController', ['$rootScope', '$scope', 'PageTitle', KamenController]);
} ());