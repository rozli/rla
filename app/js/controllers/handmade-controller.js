(function () {
  'use strict';

  function HandmadeController($scope, $rootScope, $location, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Работилничка');

    $scope.ComingSoon = "Очаквайте скоро!";

    rozLiJs.initialize();

    $rootScope.texts.fbShareURL = $rootScope.texts.url + $location.path();
    $rootScope.texts.fbShareMedia = $rootScope.texts.url + '/images/slide_3.jpg';
    $rootScope.texts.fbShareDesc = $rootScope.texts.fbStart + 'Надникнете в работилничката на RozLi Art';
  }

  angular.module('rozLi.controllers')
    .controller('HandmadeController', ['$scope', '$rootScope', '$location', 'PageTitle', HandmadeController]);
} ());