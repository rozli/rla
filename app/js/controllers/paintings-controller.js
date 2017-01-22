(function () {
  'use strict';

  function PaintingsController($scope, $rootScope, $location, $sce, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Декупаж върху платно');

    $scope.fSlider = $rootScope.paintingsSlider;

    $rootScope.texts.fbShareURL = $rootScope.texts.url + $location.path();
    $rootScope.texts.fbShareMedia = $rootScope.texts.url + '/images/p_rocks_ahtopol_3.jpg';
    $rootScope.texts.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.rocksHeading;
  }

  angular.module('rozLi.controllers')
    .controller('PaintingsController', ['$scope', '$rootScope', '$location', '$sce', 'PageTitle', PaintingsController]);
}());