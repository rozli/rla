(function () {
  'use strict';

  function TapestryController($scope, $sce, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Гоблени');

    $scope.tSlider = {
      imageUrl: '../images/slide_3.jpg',
      heading: 'Гоблени'
    };

    rozLiJs.initializeZoom("goblen");
  }

  angular.module('rozLi.controllers')
    .controller('TapestryController', ['$scope', '$sce', 'PageTitle', TapestryController]);
} ());