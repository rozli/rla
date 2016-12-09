(function () {
    'use strict';

    function DinoController($rootScope, $scope, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - Дино и приятели');

        rozLiJs.initialize();
        rozLiJs.initializeGallery("dino");
    }

    angular.module('rozLi.controllers')
        .controller('DinoController', ['$rootScope', '$scope', 'PageTitle', DinoController]);
} ());