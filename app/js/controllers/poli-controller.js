(function () {
    'use strict';

    function PoliController($rootScope, $scope, $sce, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - На разходка с Поли');

        $scope.cSlider = {
            imageUrl: '../images/s_chairs_2.jpg',
            heading: $rootScope.texts.chairsHeading,
            subheading: $sce.trustAsHtml($rootScope.texts.madeWithLove),
            initialize: true
        };

        rozLiJs.initializeGallery("poli");

        // FB share params
        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_chair_poli_1_fb.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.poliHeading;
    }

    angular.module('rozLi.controllers')
        .controller('PoliController', ['$rootScope', '$scope', '$sce', '$location', 'PageTitle', PoliController]);
} ());