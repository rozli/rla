(function () {
    'use strict';

    function RubyController($rootScope, $scope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - Кучето Руби');

        rozLiJs.initialize();
        rozLiJs.initializeGallery("ruby");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_chair_ruby_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.rubyHeading;
    }

    angular.module('rozLi.controllers')
        .controller('RubyController', ['$rootScope', '$scope', '$location', 'PageTitle', RubyController]);
} ());