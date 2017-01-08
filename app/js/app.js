(function () {
    'use strict';

    function config($routeProvider, $locationProvider) {
        var CONTROLLER_AS_VIEW_MODEL = 'vm';

        $routeProvider
            .when('/', {
                templateUrl: 'views/partials/home.html',
                controller: 'HomeController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/contact', {
                templateUrl: 'views/partials/contact.html',
                controller: 'ContactController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/children', {
                templateUrl: '../views/partials/chairs/childChairs.html',
                controller: 'ChildrenController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/children/pipona', {
                templateUrl: '../views/partials/chairs/pipona.html',
                controller: 'PiponaController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/children/poli', {
                templateUrl: '../views/partials/chairs/poli.html',
                controller: 'PoliController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/children/cowboy', {
                templateUrl: '../views/partials/chairs/cowboy.html',
                controller: 'CowboyController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/children/gabarkovci', {
                templateUrl: '../views/partials/chairs/gabarkovci.html',
                controller: 'GabarkovciController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/children/dino', {
                templateUrl: '../views/partials/chairs/dino.html',
                controller: 'DinoController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/children/zaio', {
                templateUrl: '../views/partials/chairs/zaio.html',
                controller: 'ZaioController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/children/ruby', {
                templateUrl: '../views/partials/chairs/ruby.html',
                controller: 'RubyController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/children/pirate', {
                templateUrl: '../views/partials/chairs/pirate.html',
                controller: 'PirateController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/handmade', {
                templateUrl: '../views/partials/handmade/handmadeHome.html',
                controller: 'HandmadeController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/handmade/tapestry', {
                templateUrl: '../views/partials/handmade/tapestry.html',
                controller: 'TapestryController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/handmade/makrame', {
                templateUrl: '../views/partials/handmade/makrame.html',
                controller: 'MakrameController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/handmade/antfarms', {
                templateUrl: '../views/partials/handmade/antfarms.html',
                controller: 'AntfarmController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/decoupage', {
                templateUrl: '../views/partials/decoupage/decoupageHome.html',
                controller: 'DecoupageController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/decoupage/bottles', {
                templateUrl: '../views/partials/decoupage/decoupageBottles.html',
                controller: 'BottlesController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/decoupage/bottles/bike', {
                templateUrl: '../../views/partials/decoupage/bottlesBike.html',
                controller: 'BikeController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/decoupage/bottles/lighthouse', {
                templateUrl: '../../views/partials/decoupage/bottlesLighthouse.html',
                controller: 'LighthouseController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/decoupage/bottles/forest', {
                templateUrl: '../../views/partials/decoupage/bottlesForest.html',
                controller: 'ForestController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/decoupage/bottles/gooses', {
                templateUrl: '../../views/partials/decoupage/bottlesGuski.html',
                controller: 'GoosesController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/decoupage/bottles/foxy', {
                templateUrl: '../../views/partials/decoupage/bottlesFoxy.html',
                controller: 'FoxyController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/decoupage/bottles/matrioshki', {
                templateUrl: '../../views/partials/decoupage/bottlesMatrioshki.html',
                controller: 'MatrioshkiController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/decoupage/bottles/xmas', {
                templateUrl: '../../views/partials/decoupage/bottlesXmas.html',
                controller: 'XmasController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/decoupage/bottles/snowmans', {
                templateUrl: '../../views/partials/decoupage/bottlesSnowmans.html',
                controller: 'SnowmansController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/decoupage/bottles/surikati', {
                templateUrl: '../../views/partials/decoupage/bottlesSurikati.html',
                controller: 'SurikatiController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/decoupage/bottles/dream', {
                templateUrl: '../../views/partials/decoupage/bottlesDream.html',
                controller: 'DreamController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/decoupage/cups', {
                templateUrl: '../views/partials/decoupage/decoupageCups.html',
                controller: 'CupsController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/decoupage/rocks', {
                templateUrl: '../views/partials/decoupage/decoupageRocks.html',
                controller: 'RocksController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/decoupage/rocks/kamen', {
                templateUrl: '../../views/partials/decoupage/rocksKamen.html',
                controller: 'KamenController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/decoupage/rocks/boat', {
                templateUrl: '../../views/partials/decoupage/rocksBoat.html',
                controller: 'BoatController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/decoupage/rocks/rojdestvo', {
                templateUrl: '../../views/partials/decoupage/rocksRojdestvo.html',
                controller: 'RojdestvoController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/decoupage/rocks/simeon', {
                templateUrl: '../../views/partials/decoupage/rocksSimeon.html',
                controller: 'SimeonController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/decoupage/rocks/impuls', {
                templateUrl: '../../views/partials/decoupage/rocksImpuls.html',
                controller: 'ImpulsController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/decoupage/rocks/lisici', {
                templateUrl: '../../views/partials/decoupage/rocksLisici.html',
                controller: 'LisiciController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/weddings', {
                templateUrl: '../views/partials/weddings/weddingsHome.html',
                controller: 'WeddingsController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/weddings/baskets', {
                templateUrl: '../views/partials/weddings/weddingBaskets.html',
                controller: 'BasketsController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/weddings/champagne', {
                templateUrl: '../views/partials/weddings/weddingChampagne.html',
                controller: 'ChampagneController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/weddings/champagne/magic', {
                templateUrl: '../../views/partials/weddings/champagneMagic.html',
                controller: 'MagicController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/weddings/champagne/silver', {
                templateUrl: '../../views/partials/weddings/champagneSilver.html',
                controller: 'SilverController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/teachme', {
                templateUrl: '../views/partials/howIsMade.html',
                controller: 'TeachmeController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }

    angular.module('rozLi.services', []);
    angular.module('rozLi.controllers', ['rozLi.services'])
        .directive('cnotFinished', function () {
            return {
                restrict: 'A',
                templateUrl: '../views/partials/chairs/chairNotFinished.html'
            };
        })
        .directive('rlSlider', function () {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    slider: '=info'
                },
                templateUrl: '../../views/partials/slider.html',
                link: function (scope, element, attrs, controller, transcludeFn) {
                    if (scope.slider.initialize) {
                        rozLiJs.initialize();
                    }
                }
            };
        });
    angular.module('rozLi', ['ngRoute', 'rozLi.controllers', '720kb.socialshare'])
        .config(['$routeProvider', '$locationProvider', config])
        .run(runFunction)
        .constant('baseServiceUrl', 'http://localhost:53249');

    // Google Analytics for SPA
    runFunction.$inject = ['$rootScope', '$location', '$window', '$sce'];

    function runFunction($rootScope, $location, $window, $sce) {

        $rootScope.texts = {
            year: new Date().getFullYear(),
            email: "rozliart@gmail.com",
            fbId: "217179975399213",
            fbStart: 'RozLiArt.com - ',
            url: 'https://www.rozliart.com',
            fbShareDesc: '',
            fbShareURL: '',
            fbShareMedia: '',
            details: "Детайли",
            material: "Материал",
            desc: 'Описание',
            measure: 'Размери',
            madeWithLove: 'Направенo с <i class="icon-heart3"></i> от <a href="https://www.rozliart.com">RozLi Art</a>',
            materialTxt: "Масив иглолистна дървесина, акрилни бои, техника декупаж, фиксирани с безцветен яхтен лак.",
            materialStoneTxt: "Камък, акрилни бои, техника декупаж, фиксиран със салфетен лак.",
            maintenance: "Поддръжка",
            maintenanceTxt: "Почиства се с мека, леко влажна кърпа.",
            mainenanceBottles: "Не се препоръчва почистване в съдомиялна машина. Не трябва да се мие с абразивни и агресивни препарати.",
            decoupageBottlesDesc: "Малка ръчно декорирана бутилка с техниката декупаж.",
            noDisassemble: "Столът не се разглобява.",
            chairsHeading: "Дизайнерски детски столчета",
            weddingsHeading: 'Сватбено шампанско и кошници',
            piponaHeading: 'Стол "Приказната вила Пипона"',
            gabarkovciHeading: 'Детско столче "Гъбарковците"',
            dinoHeading: 'Детско столче "Дино и приятели"',
            zaioHeading: 'Детско столче "Зайо Байо и Мечока"',
            rubyHeading: 'Детско столче "Кучето Руби"',
            pirateHeading: 'Детско столче "Ломбо Пирата"',
            poliHeading: 'Детско столче "На разходка с Поли"',
            cowboyHeading: 'Детско столче "Приключенията на Дъмбо Каубоеца"',
            rocksHeading: "Ръчно украсени камъни",
            bottlesHeading: "Декупаж върху бутилки",
            bottlesDescription: 'Ръчно декорирана бутилка с техниката декупаж, която може да напълните с любимото си питие',
            bottleBike: 'Бутилка "На море с колело"',
            bottleLighthouse: 'Бутилка "Фарът"',
            bottleForest: 'Бутилка "Живот в гората"',
            boatAhtopol: 'Камък "Рибарска лодка Ахтопол"',
            bottleGooses: 'Бутилка "Гъските на Жозефин"',
            bottleFoxy: 'Бутилка "Фокси"',
            bottleMatrioshki: 'Бутилка "Матрьошки"',
            bottleXmas: 'Бутилка "Снежната пързалка"',
            bottleSnowmans: 'Бутилка "Снежковците"',
            bottleSurikati: 'Бутилка "Сурикати: бой с топки"',
            bottleDream: 'Бутилка "Коледна мечта"',
            rockRojdestro: 'Камък "Рождество Христово"',
            kamen: 'Камък "Лосът Камен"',
            rockLisici: 'Камък "Лисиче семейство"',
            rockImpuls: 'Камък "Импулсивно"',
            rockSimeon: 'Камък "Симеон Велики"',
            champHeading: 'Сватбено шампанско',
            champMagic: 'Шампанско "Вълшебство"',
            champSilver: 'Шампанско "Сребърна перла"',
            tapestryFarm: 'Гоблен "Голямата ферма"',
            antfarm: 'Мравеферма "Старата възрожденска къща"'
        };

        $rootScope.rocksSlider = {
            imageUrl: '../../images/s_decoupage_1.jpg',
            heading: $rootScope.texts.rocksHeading,
            subheading: $sce.trustAsHtml($rootScope.texts.madeWithLove),
            initialize: true
        };

        $rootScope.bottlesSlider = {
            imageUrl: '../../images/s_decoupage_1.jpg',
            heading: $rootScope.texts.bottlesHeading,
            subheading: $sce.trustAsHtml($rootScope.texts.madeWithLove),
            initialize: true
        };

        $rootScope.bXmasSlider = {
            imageUrl: '../../images/s_xmas_bottles.jpg',
            heading: $rootScope.texts.bottlesHeading,
            subheading: $sce.trustAsHtml($rootScope.texts.madeWithLove),
            initialize: true
        };

        // initialise google analytics
        $window.ga('create', 'UA-88641929-1', 'auto');

        $rootScope.$on('$routeChangeSuccess', function () {

            var location = $location.path();

            // track pageview on route change
            $window.ga('set', 'page', $location.path());
            $window.ga('send', 'pageview');

            // remove divs generated by the jquery.ez-plus plugin 
            $('.zoomContainer').remove();

            // $('#goblen-zoomContainer').remove();
            // $('#antfarm-zoomContainer').remove();
            // $('#pipona-zoomContainer').remove();
            // $('#poli-zoomContainer').remove();
            // $('#cowboy-zoomContainer').remove();
            // $('#gabarkovci-zoomContainer').remove();
            // $('#dino-zoomContainer').remove();
            // $('#zaio-zoomContainer').remove();
            // $('#ruby-zoomContainer').remove();
            // $('#pirate-zoomContainer').remove();
            // $('#kamen-zoomContainer').remove();
            // $('#boat-zoomContainer').remove();
            // $('#bike-zoomContainer').remove();
            // $('#lighthouse-zoomContainer').remove();
            // $('#forest-zoomContainer').remove();
            // $('#magic-zoomContainer').remove();
            // $('#silver-zoomContainer').remove();
            // $('#guski-zoomContainer').remove();
            // $('#foxes-zoomContainer').remove();
            // $('#matrioshki-zoomContainer').remove();
            // $('#xmas-zoomContainer').remove();
            // $('#snowmans-zoomContainer').remove();
            // $('#surikati-zoomContainer').remove();
            // $('#dream-zoomContainer').remove();
            // $('#rojdestvo-zoomContainer').remove();
            // $('#lisici-zoomContainer').remove();
            // $('#impuls-zoomContainer').remove();
            // $('#simeon-zoomContainer').remove();
        });

        // Activate bootstrap tooltips
        $(document).ready(function () {
            $("body").tooltip({
                selector: '[data-toggle=tooltip]'
            });

            $(window).resize(function () {
                checkZoom();
            });
        });
    }

    function checkZoom() {
        //console.log($(document).width());

        if ($(document).width() < 975) {
            //console.log('zoom removed');

            $('.zoomContainer').remove();
            
            // remove event handlers on image, so scrolling is enabled
            $('.img-responsive').off();
        }
    }
}());