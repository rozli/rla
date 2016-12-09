(function () {
    'use strict';

    function ContactController($scope, $http, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - Как да купя?');

        $scope.cSlider = {
            imageUrl: 'images/s_checkout.jpg',
            heading: 'Как да купя?'
        };

        $scope.submitForm = function () {
            if ($scope.requestForm.$valid) {
                $('.alert.alert-dismissible').hide();
                $scope.requestForm.submitDisabled = true;

                $http({
                    url: "https://formspree.io/rozliart@gmail.com",
                    data: $.param({
                        email: $scope.email,
                        message: $scope.name + ", телефон: " + $scope.phone + " иска да поръча продукт с име ''" + $scope.product + "''. Адресът за доставка е: " + $scope.address + ". Съобщение на клиента: " + $scope.message
                    }),
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function () {
                    $('.alert.alert-dismissible').show();
                    $scope.requestForm.submitDisabled = false;
                    $scope.emailSent = true;
                    $scope.emailSentError = false;
                }, function () {
                    $('.alert.alert-dismissible').show();
                    $scope.requestForm.submitDisabled = false;
                    $scope.emailSentError = true;
                    $scope.emailSent = false;
                });;
            }
        };
    }

    angular.module('rozLi.controllers')
        .controller('ContactController', ['$scope', '$http', 'PageTitle', ContactController]);
} ());