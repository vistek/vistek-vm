'use strict';

define(function (require) {

    require('ng');

    console.log('main');

    /**
     * @ngdoc function
     * @name vistekVmApp.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the vistekVmApp
     */
    angular.module('main.controllers', [])
      .controller('MainCtrl', function ($scope) {
          $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
          ];
      });

})
