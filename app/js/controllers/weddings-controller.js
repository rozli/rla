(function () {
    'use strict';

    function WeddingsController($scope, $rootScope, $location, $sce, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - Сватбени');

        $scope.sSlider = {
            imageUrl: '../../images/slide_2.jpg',
            heading: $rootScope.texts.weddingsHeading,
            subheading: $sce.trustAsHtml($rootScope.texts.madeWithLove),
            initialize: true
        };

        $rootScope.texts.fbShareURL = $rootScope.texts.url + $location.path();
        $rootScope.texts.fbShareMedia = $rootScope.texts.url + '/images/slide_2.jpg';
        $rootScope.texts.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.weddingsHeading;
    }

    angular.module('rozLi.controllers')
        .controller('WeddingsController', ['$scope', '$rootScope', '$location', '$sce', 'PageTitle', WeddingsController]);
}());