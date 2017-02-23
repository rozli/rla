(function () {
  'use strict';

  function BasketsController($scope, $rootScope, $location, $sce, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Сватбени кошници');

    $scope.sSlider = {
      imageUrl: '../../images/s_baskets_1.jpg',
      heading: 'Ръчно изработени кошници за Вашата сватба',
      subheading: $sce.trustAsHtml($rootScope.texts.madeWithLove)
    };

    $scope.xSlider = {
      imageUrl: '../../images/s_baskets_2.jpg',
      heading: 'Ръчно изработени сватбени кошници',
      subheading: $sce.trustAsHtml($rootScope.texts.madeWithLove),
      initialize: true
    };
  }

  angular.module('rozLi.controllers')
    .controller('BasketsController', ['$scope', '$rootScope', '$location', '$sce', 'PageTitle', BasketsController]);
}());