(function () {
  'use strict';

  function RocksController($scope, $rootScope, $location, $sce, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Декупаж върху камък');

    $scope.xSlider = $rootScope.rocksSlider;

    $rootScope.texts.fbShareURL = $rootScope.texts.url + $location.path();
    $rootScope.texts.fbShareMedia = $rootScope.texts.url + '/images/p_rocks_ahtopol_3.jpg';
    $rootScope.texts.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.rocksHeading;
  }

  angular.module('rozLi.controllers')
    .controller('RocksController', ['$scope', '$rootScope', '$location', '$sce', 'PageTitle', RocksController]);
}());