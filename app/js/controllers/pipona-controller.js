(function () {
  'use strict';

  function PiponaController($rootScope, $scope, $location, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Приказната вила Пипона');

    rozLiJs.initialize();
    rozLiJs.initializeGallery("pipona");

    // FB share params
    $scope.fbShareURL = $rootScope.texts.url + $location.path();
    $scope.fbShareMedia = $rootScope.texts.url + '/images/p_chair_pipona_1.jpg';
    $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.piponaHeading;
  }

  angular.module('rozLi.controllers')
    .controller('PiponaController', ['$rootScope', '$scope', '$location', 'PageTitle', PiponaController]);
} ());