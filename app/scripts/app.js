'use strict';

define(function (require) {

    console.log('app');

    require('ng');
    require('../bower_components/angular-route/angular-route.js');

    require('scripts/controllers/main');
    require('scripts/controllers/about');

    console.log('app2'); 

    /**
     * @ngdoc overview
     * @name vistekVmApp
     * @description
     * # vistekVmApp
     *
     * Main module of the application.
     */
    angular
      .module('vistekVmApp', ['ngRoute', 'main.controllers', 'about.controllers'])
      .config(function ($routeProvider) {
          $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
      });

    return {
        init: function () {
            angular.bootstrap(document, ['vistekVmApp']);
        }
    }

});