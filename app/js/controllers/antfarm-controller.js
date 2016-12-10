(function () {
  'use strict';

  function AntfarmController($scope, $rootScope, $location, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Мравеферми');

    rozLiJs.initialize();
    rozLiJs.initializeGallery("antfarm");

    $scope.fbShareURL = $rootScope.texts.url + $location.path();
    $scope.fbShareMedia = $rootScope.texts.url + '/images/s_ferma.jpg';
    $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.antfarm;
  }

  angular.module('rozLi.controllers')
    .controller('AntfarmController', ['$scope', '$rootScope', '$location', 'PageTitle', AntfarmController]);
} ());