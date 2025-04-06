(function () {
    'use strict';
  
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    function LunchCheckController() {
      var lc = this;
  
      lc.checkLunch = function () {
        if (!lc.lunchList) {
          lc.message = "Please enter data first";
          lc.messageClass = "error";
          return;
        }
  
        var items = lc.lunchList.split(',').filter(function (item) {
          return item.trim() !== '';
        });
  
        if (items.length === 0) {
          lc.message = "Please enter data first";
          lc.messageClass = "error";
        } else if (items.length <= 3) {
          lc.message = "Enjoy!";
          lc.messageClass = "success";
        } else {
          lc.message = "Too much!";
          lc.messageClass = "success";
        }
      };
    }
  })();
  