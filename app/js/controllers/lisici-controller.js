(function () {
  'use strict';

  function LisiciController($scope, $rootScope, $location, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - ' + $rootScope.texts.rockLisici);

    $scope.xSlider = $rootScope.rocksSlider;

    rozLiJs.initializeZoom("lisici");

    $scope.fbShareURL = $rootScope.texts.url + $location.path();
    $scope.fbShareMedia = $rootScope.texts.url + '/images/p_rocks_lisici_1.jpg';
    $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.rockLisici;
  }

  angular.module('rozLi.controllers')
    .controller('LisiciController', ['$scope', '$rootScope', '$location', 'PageTitle', LisiciController]);
}());