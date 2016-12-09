(function () {
    'use strict';

    function MagicController($rootScope, $scope, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - ' + $rootScope.texts.champMagic);

        rozLiJs.initialize();
        rozLiJs.initializeGallery("magic");
    }

    angular.module('rozLi.controllers')
        .controller('MagicController', ['$rootScope', '$scope', 'PageTitle', MagicController]);
} ());