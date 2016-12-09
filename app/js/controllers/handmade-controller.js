(function () {
  'use strict';

  function HandmadeController($scope, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Работилничка');

    $scope.ComingSoon = "Очаквайте скоро!";

    rozLiJs.initialize();
  }

  angular.module('rozLi.controllers')
    .controller('HandmadeController', ['$scope', 'PageTitle', HandmadeController]);
} ());