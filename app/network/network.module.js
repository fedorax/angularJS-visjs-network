'use strict';



angular.module('network', ['ngRoute', 'ngVis'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/network', {
            template: '<network></network>'
        });
    }]);