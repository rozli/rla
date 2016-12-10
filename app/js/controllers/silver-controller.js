(function () {
    'use strict';

    function SilverController($scope, $rootScope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - ' + $rootScope.texts.champSilver);

        rozLiJs.initialize();
        rozLiJs.initializeGallery("silver");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_cham_s_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.champSilver;
    }

    angular.module('rozLi.controllers')
        .controller('SilverController', ['$scope', '$rootScope', '$location', 'PageTitle', SilverController]);
} ());