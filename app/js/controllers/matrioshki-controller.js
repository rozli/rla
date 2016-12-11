(function () {
    'use strict';

    function MatrioshkiController($scope, $sce, $rootScope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - ' + $rootScope.texts.bottleMatrioshki);

        $scope.mSlider = {
            imageUrl: '../../images/s_xmas_bottles.jpg',
            heading: $rootScope.texts.bottlesHeading,
            subheading: $sce.trustAsHtml($rootScope.texts.madeWithLove),
            initialize: true
        };

        rozLiJs.initializeGallery("matrioshki");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_bottle_matrioshki_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.bottleMatrioshki;
    }

    angular.module('rozLi.controllers')
        .controller('MatrioshkiController', ['$scope', '$sce', '$rootScope', '$location', 'PageTitle', MatrioshkiController]);
} ());