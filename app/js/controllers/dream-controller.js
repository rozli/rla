(function () {
    'use strict';

    function DreamController($scope, $rootScope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - ' + $rootScope.texts.bottleDream);

        $scope.dSlider = $rootScope.bXmasSlider;

        rozLiJs.initializeZoom("dream");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_bottle_xmasDream_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.bottleDream;
    }

    angular.module('rozLi.controllers')
        .controller('DreamController', ['$scope', '$rootScope', '$location', 'PageTitle', DreamController]);
}());