(function () {
  'use strict';

  function SimeonController($scope, $rootScope, $location, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - ' + $rootScope.texts.rockSimeon);

    $scope.xSlider = $rootScope.rocksSlider;

    rozLiJs.initializeGallery("simeon");

    $scope.fbShareURL = $rootScope.texts.url + $location.path();
    $scope.fbShareMedia = $rootScope.texts.url + '/images/p_rocks_simeon_1.jpg';
    $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.rockSimeon;
  }

  angular.module('rozLi.controllers')
    .controller('SimeonController', ['$scope', '$rootScope', '$location', 'PageTitle', SimeonController]);
}());