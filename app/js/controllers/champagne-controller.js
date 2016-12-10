(function () {
  'use strict';

  function ChampagneController($scope, $rootScope, $location, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Сватбено шампанско');

    rozLiJs.initialize();

    $rootScope.texts.fbShareURL = $rootScope.texts.url + $location.path();
    $rootScope.texts.fbShareMedia = $rootScope.texts.url + '/images/slide_2.jpg';
    $rootScope.texts.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.champHeading;
  }

  angular.module('rozLi.controllers')
    .controller('ChampagneController', ['$scope', '$rootScope', '$location', 'PageTitle', ChampagneController]);
} ());