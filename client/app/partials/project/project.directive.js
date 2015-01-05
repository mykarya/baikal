'use strict';

angular.module('arsiaApp')
  .directive('project', function () {
    return {
      templateUrl: 'app/partials/project/project.html',
      restrict: 'EA',
      scope: {},
      controller: ['$scope', function($scope){
        $scope.project = {
          name:"",
          start_date:"",
          end_date:"",
          cycles:""
        };

        // All stuff needed for Data Picker
        $scope.start_date_open = function($event) {
          $event.preventDefault();
          $event.stopPropagation();

          $scope.start_date_opened = true;
        };

        $scope.end_date_open = function($event) {
          $event.preventDefault();
          $event.stopPropagation();

          $scope.end_date_opened = true;
        };

        // Select from multiple format options
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[3];

        //------------------------------------------

        // Stuff for Progress bar
        $scope.stacked = [{'value':25,'type':'success'},{'value':25,'type':'warning'}];
        $scope.temp_cycles = [{'idx':1},{'idx':2},{'idx':3}] //TODO replace by actual cycles entered by User.

      }],
      link: function (scope, element, attrs) {
      }
    };
  });
