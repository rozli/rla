(function () {
    'use strict';

    function PirateController($rootScope, $scope, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - Ломбо Пирата');

        rozLiJs.initialize();
        rozLiJs.initializeGallery("pirate");
    }

    angular.module('rozLi.controllers')
        .controller('PirateController', ['$rootScope', '$scope', 'PageTitle', PirateController]);
} ());