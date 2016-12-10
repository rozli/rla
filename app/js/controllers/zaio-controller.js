(function () {
    'use strict';

    function ZaioController($rootScope, $scope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - Зайо Байо и Мечока');

        rozLiJs.initialize();
        rozLiJs.initializeGallery("zaio");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_chair_zaio_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.zaioHeading;
    }

    angular.module('rozLi.controllers')
        .controller('ZaioController', ['$rootScope', '$scope', '$location', 'PageTitle', ZaioController]);
} ());