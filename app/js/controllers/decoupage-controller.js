(function () {
  'use strict';

  function DecoupageController($scope, $sce, $rootScope, $location, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Декупаж');

    $scope.dSlider = {
      imageUrl: 'images/s_decoupage_1.jpg',
      heading: 'Декупаж',
      subheading: $sce.trustAsHtml('Направенo с <i class="icon-heart3"></i> от <a href="https://www.rozliart.com">RozLi Art</a>')
    };
  }

  angular.module('rozLi.controllers')
    .controller('DecoupageController', ['$scope', '$sce', '$rootScope', '$location', 'PageTitle', DecoupageController]);
} ());