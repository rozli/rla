(function () {
  'use strict';

  function BottlesController($scope, $rootScope, $location, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - ' + $rootScope.texts.bottlesHeading);

    rozLiJs.initialize();

    $rootScope.texts.fbShareURL = $rootScope.texts.url + $location.path();
    $rootScope.texts.fbShareMedia = $rootScope.texts.url + '/images/p_bottle_bike_1.jpg';
    $rootScope.texts.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.bottlesHeading;
  }

  angular.module('rozLi.controllers')
    .controller('BottlesController', ['$scope', '$rootScope', '$location', 'PageTitle', BottlesController]);
} ());