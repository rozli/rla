(function () {
    'use strict';

    function GabarkovciController($rootScope, $scope, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - Гъбарковците');

        rozLiJs.initialize();
        rozLiJs.initializeGallery("gabarkovci");
    }

    angular.module('rozLi.controllers')
        .controller('GabarkovciController', ['$rootScope', '$scope', 'PageTitle', GabarkovciController]);
} ());