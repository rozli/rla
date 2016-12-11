(function () {
  'use strict';

  function BottlesController($scope, $rootScope, $location, $sce, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - ' + $rootScope.texts.bottlesHeading);

    $scope.fSlider = {
      imageUrl: '../../images/s_xmas_bottles.jpg',
      heading: $rootScope.texts.bottlesHeading,
      subheading: $sce.trustAsHtml($rootScope.texts.madeWithLove),
    };

    $scope.sSlider = {
      imageUrl: '../../images/s_decoupage_1.jpg',
      heading: $rootScope.texts.bottlesHeading,
      subheading: $sce.trustAsHtml($rootScope.texts.madeWithLove),
      initialize: true
    };

    $rootScope.texts.fbShareURL = $rootScope.texts.url + $location.path();
    $rootScope.texts.fbShareMedia = $rootScope.texts.url + '/images/p_bottle_bike_1.jpg';
    $rootScope.texts.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.bottlesHeading;
  }

  angular.module('rozLi.controllers')
    .controller('BottlesController', ['$scope', '$rootScope', '$location', '$sce', 'PageTitle', BottlesController]);
} ());