(function () {
    'use strict';

    function ZaioController($rootScope, $scope, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - Зайо Байо и Мечока');

        rozLiJs.initialize();
        rozLiJs.initializeGallery("zaio");
    }

    angular.module('rozLi.controllers')
        .controller('ZaioController', ['$rootScope', '$scope', 'PageTitle', ZaioController]);
} ());