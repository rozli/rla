(function () {
    'use strict';

    function SilverController($rootScope, $scope, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - ' + $rootScope.texts.champSilver);

        rozLiJs.initialize();
        rozLiJs.initializeGallery("silver");
    }

    angular.module('rozLi.controllers')
        .controller('SilverController', ['$rootScope', '$scope', 'PageTitle', SilverController]);
} ());