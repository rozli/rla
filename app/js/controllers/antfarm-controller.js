(function () {
  'use strict';

  function AntfarmController($scope, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Мравеферми');

    rozLiJs.initialize();
    rozLiJs.initializeGallery("antfarm");
  }

  angular.module('rozLi.controllers')
    .controller('AntfarmController', ['$scope', 'PageTitle', AntfarmController]);
} ());