(function () {
  'use strict';

  function RojdestvoController($scope, $rootScope, $location, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - ' + $rootScope.texts.rockRojdestro);

    $scope.xSlider = $rootScope.rocksSlider;

    rozLiJs.initializeZoom("rojdestvo");

    $scope.fbShareURL = $rootScope.texts.url + $location.path();
    $scope.fbShareMedia = $rootScope.texts.url + '/images/p_rocks_rojdestvo_1.jpg';
    $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.rockRojdestro;
  }

  angular.module('rozLi.controllers')
    .controller('RojdestvoController', ['$scope', '$rootScope', '$location', 'PageTitle', RojdestvoController]);
}());