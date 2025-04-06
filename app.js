(function () {
    'use strict';
  
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
  
    function LunchCheckController($scope) {
      $scope.lunchList = "";
      $scope.message = "";
      $scope.messageClass = "";
  
      $scope.checkLunch = function () {
        if (!$scope.lunchList) {
          $scope.message = "Please enter data first!";
          $scope.messageClass = "error";
          return;
        }
  
        var items = $scope.lunchList.split(',')
          .map(item => item.trim())
          .filter(item => item.length > 0);
  
        if (items.length <= 3) {
          $scope.message = "Enjoy!";
          $scope.messageClass = "success";
        } else {
          $scope.message = "Too Much!";
          $scope.messageClass = "success";
        }
      };
    }
  })();
  