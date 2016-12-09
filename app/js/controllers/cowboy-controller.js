(function () {
    'use strict';

    function CowboyController($rootScope, $scope, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - Приключенията на Дъмбо Каубоеца');

        rozLiJs.initialize();
        rozLiJs.initializeGallery("cowboy");
    }

    angular.module('rozLi.controllers')
        .controller('CowboyController', ['$rootScope', '$scope', 'PageTitle', CowboyController]);
} ());