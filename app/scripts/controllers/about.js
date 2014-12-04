'use strict';

define(function (require) {

    require('ng');

    /**
     * @ngdoc function
     * @name vistekVmApp.controller:AboutCtrl
     * @description
     * # AboutCtrl
     * Controller of the vistekVmApp
     */
    angular.module('vistekVmApp')
      .controller('AboutCtrl', function ($scope) {
          $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
          ];
      });

})