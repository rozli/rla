(function () {
    'use strict';

    function DreamController($scope, $sce, $rootScope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - ' + $rootScope.texts.bottleDream);

        $scope.dSlider = {
            imageUrl: '../../images/s_xmas_bottles.jpg',
            heading: $rootScope.texts.bottlesHeading,
            subheading: $sce.trustAsHtml($rootScope.texts.madeWithLove),
            initialize: true
        };

        rozLiJs.initializeZoom("dream");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_bottle_xmasDream_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.bottleDream;
    }

    angular.module('rozLi.controllers')
        .controller('DreamController', ['$scope', '$sce', '$rootScope', '$location', 'PageTitle', DreamController]);
} ());