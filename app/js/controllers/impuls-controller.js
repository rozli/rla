(function () {
  'use strict';

  function ImpulsController($scope, $rootScope, $location, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - ' + $rootScope.texts.rockImpuls);

    $scope.xSlider = $rootScope.rocksSlider;

    rozLiJs.initializeZoom("impuls");

    $scope.fbShareURL = $rootScope.texts.url + $location.path();
    $scope.fbShareMedia = $rootScope.texts.url + '/images/p_rocks_impuls_1.jpg';
    $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.rockImpuls;
  }

  angular.module('rozLi.controllers')
    .controller('ImpulsController', ['$scope', '$rootScope', '$location', 'PageTitle', ImpulsController]);
}());