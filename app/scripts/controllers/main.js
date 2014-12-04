'use strict';

define(function (require) {

    require('ng');

    /**
     * @ngdoc function
     * @name vistekVmApp.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the vistekVmApp
     */
    angular.module('vistekVmApp')
      .controller('MainCtrl', function ($scope) {
          $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
          ];
      });

})
