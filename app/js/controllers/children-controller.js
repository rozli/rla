(function () {
  'use strict';

  function ChildrenController($scope, PageTitle, $location, $rootScope, $sce) {
    var vm = this;
    PageTitle.setTitle('RozLi - Детски столчета');

    $scope.cSlider = {
      imageUrl: 'images/s_chairs_2.jpg',
      heading: $rootScope.texts.chairsHeading,
      subheading: $sce.trustAsHtml($rootScope.texts.madeWithLove),
      initialize: true
    };

    $rootScope.texts.fbShareURL = $rootScope.texts.url + $location.path();
    $rootScope.texts.fbShareMedia = $rootScope.texts.url + '/images/s_chairs_2.jpg';
    $rootScope.texts.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.chairsHeading;
  }

  angular.module('rozLi.controllers')
    .controller('ChildrenController', ['$scope', 'PageTitle', '$location', '$rootScope', '$sce', ChildrenController]);
} ());