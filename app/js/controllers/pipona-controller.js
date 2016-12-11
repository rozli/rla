(function () {
  'use strict';

  function PiponaController($rootScope, $scope, $sce, $location, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Приказната вила Пипона');

    $scope.cSlider = {
      imageUrl: '../images/s_chairs_2.jpg',
      heading: $rootScope.texts.chairsHeading,
      subheading: $sce.trustAsHtml($rootScope.texts.madeWithLove),
      initialize: true
    };

    rozLiJs.initializeGallery("pipona");

    $scope.fbShareURL = $rootScope.texts.url + $location.path();
    $scope.fbShareMedia = $rootScope.texts.url + '/images/p_chair_pipona_1_fb.jpg';
    $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.piponaHeading;
  }

  angular.module('rozLi.controllers')
    .controller('PiponaController', ['$rootScope', '$scope', '$sce', '$location', 'PageTitle', PiponaController]);
} ());