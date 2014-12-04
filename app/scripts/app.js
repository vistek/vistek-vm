'use strict';

define(function (require) {

    require('ng-route');

    //require('./controllers/main');
    //require('./controllers/about');

    /**
     * @ngdoc overview
     * @name vistekVmApp
     * @description
     * # vistekVmApp
     *
     * Main module of the application.
     */
    angular
      .module('vistekVmApp', [
        'ngRoute',
      ]);
      //.config(function ($routeProvider) {
      //    $routeProvider
      //      .when('/', {
      //          templateUrl: 'views/main.html',
      //          controller: 'MainCtrl'
      //      })
      //      .when('/about', {
      //          templateUrl: 'views/about.html',
      //          controller: 'AboutCtrl'
      //      })
      //      .otherwise({
      //          redirectTo: '/'
      //      });
      //});

})
