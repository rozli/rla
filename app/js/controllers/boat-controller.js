(function () {
  'use strict';

  function BoatController($scope, $rootScope, $location, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Рибарска лодка Ахтопол');

    $scope.xSlider = $rootScope.rocksSlider;

    rozLiJs.initializeGallery("boat");

    $scope.fbShareURL = $rootScope.texts.url + $location.path();
    $scope.fbShareMedia = $rootScope.texts.url + '/images/p_rocks_ahtopol_1.jpg';
    $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.boatAhtopol;
  }

  angular.module('rozLi.controllers')
    .controller('BoatController', ['$scope', '$rootScope', '$location', 'PageTitle', BoatController]);
}());