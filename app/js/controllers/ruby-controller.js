(function () {
    'use strict';

    function RubyController($rootScope, $scope, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - Кучето Руби');

        rozLiJs.initialize();
        rozLiJs.initializeGallery("ruby");
    }

    angular.module('rozLi.controllers')
        .controller('RubyController', ['$rootScope', '$scope', 'PageTitle', RubyController]);
} ());