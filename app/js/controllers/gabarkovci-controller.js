(function () {
    'use strict';

    function GabarkovciController($rootScope, $scope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - Гъбарковците');

        rozLiJs.initialize();
        rozLiJs.initializeGallery("gabarkovci");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_chair_gabarkovci_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.gabarkovciHeading;
    }

    angular.module('rozLi.controllers')
        .controller('GabarkovciController', ['$rootScope', '$scope', '$location', 'PageTitle', GabarkovciController]);
} ());