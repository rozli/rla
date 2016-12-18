(function () {
    'use strict';

    function RojdestvoController($scope, $rootScope, $location, $sce, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - ' + $rootScope.texts.rockRojdestro);

        $scope.xSlider = {
            imageUrl: '../../images/s_decoupage_1.jpg',
            heading: $rootScope.texts.rocksHeading,
            subheading: $sce.trustAsHtml($rootScope.texts.madeWithLove),
            initialize: true
        };

        rozLiJs.initializeZoom("rojdestvo");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_rocks_rojdestvo_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.rockRojdestro;
    }

    angular.module('rozLi.controllers')
        .controller('RojdestvoController', ['$scope', '$rootScope', '$location', '$sce', 'PageTitle', RojdestvoController]);
} ());