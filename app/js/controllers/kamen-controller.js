(function () {
  'use strict';

  function KamenController($scope, $rootScope, $location, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Лосът Камен');

    $scope.xSlider = $rootScope.rocksSlider;

    rozLiJs.initializeZoom("kamen");

    $scope.fbShareURL = $rootScope.texts.url + $location.path();
    $scope.fbShareMedia = $rootScope.texts.url + '/images/p_rocks_kamen_1.jpg';
    $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.kamen;
  }

  angular.module('rozLi.controllers')
    .controller('KamenController', ['$scope', '$rootScope', '$location', 'PageTitle', KamenController]);
}());