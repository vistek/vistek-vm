'use strict';

define(function (require) {


    require('ng');

    console.log('about');

    /**
     * @ngdoc function
     * @name vistekVmApp.controller:AboutCtrl
     * @description
     * # AboutCtrl
     * Controller of the vistekVmApp
     */
    angular.module('about.controllers', [])
      .controller('AboutCtrl', function ($scope) {
          $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
          ];
      });

})
