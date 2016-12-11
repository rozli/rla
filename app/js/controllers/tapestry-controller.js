(function () {
  'use strict';

  function TapestryController($scope, $sce, $rootScope, $location, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Гоблени');

    $scope.tSlider = {
      imageUrl: '../images/slide_3.jpg',
      heading: 'Гоблени',
      initialize: true
    };

    rozLiJs.initializeZoom("goblen");

    $scope.fbShareURL = $rootScope.texts.url + $location.path();
    $scope.fbShareMedia = $rootScope.texts.url + '/images/goblen_1_w.jpeg';
    $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.tapestryFarm;
  }

  angular.module('rozLi.controllers')
    .controller('TapestryController', ['$scope', '$sce', '$rootScope', '$location', 'PageTitle', TapestryController]);
} ());