(function () {
    'use strict';

    function GoosesController($scope, $sce, $rootScope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - ' + $rootScope.texts.bottleGooses);

        $scope.gSlider = {
            imageUrl: '../../images/s_xmas_bottles.jpg',
            heading: $rootScope.texts.bottlesHeading,
            subheading: $sce.trustAsHtml($rootScope.texts.madeWithLove),
            initialize: true
        };

        rozLiJs.initializeGallery("guski");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_bottle_guski_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.bottleGooses;
    }

    angular.module('rozLi.controllers')
        .controller('GoosesController', ['$scope', '$sce', '$rootScope', '$location', 'PageTitle', GoosesController]);
} ());