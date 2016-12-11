(function () {
    'use strict';

    function SurikatiController($scope, $sce, $rootScope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - ' + $rootScope.texts.bottleSurikati);

        $scope.sSlider = {
            imageUrl: '../../images/s_xmas_bottles.jpg',
            heading: $rootScope.texts.bottlesHeading,
            subheading: $sce.trustAsHtml($rootScope.texts.madeWithLove),
            initialize: true
        };

        rozLiJs.initializeZoom("surikati");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_bottle_surikati_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.bottleSurikati;
    }

    angular.module('rozLi.controllers')
        .controller('SurikatiController', ['$scope', '$sce', '$rootScope', '$location', 'PageTitle', SurikatiController]);
} ());