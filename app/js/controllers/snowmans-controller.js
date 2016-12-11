(function () {
    'use strict';

    function SnowmansController($scope, $sce, $rootScope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - ' + $rootScope.texts.bottleSnowmans);

        $scope.smSlider = {
            imageUrl: '../../images/s_xmas_bottles.jpg',
            heading: $rootScope.texts.bottlesHeading,
            subheading: $sce.trustAsHtml($rootScope.texts.madeWithLove),
            initialize: true
        };

        rozLiJs.initializeGallery("snowmans");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_bottle_snowmans_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.bottleSnowmans;
    }

    angular.module('rozLi.controllers')
        .controller('SnowmansController', ['$scope', '$sce', '$rootScope', '$location', 'PageTitle', SnowmansController]);
} ());