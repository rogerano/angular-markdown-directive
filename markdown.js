(function()
{
/*
 * angular-markdown-directive v0.1.0
 * (c) 2013 Brian Ford http://briantford.com
 * License: MIT
 * Contributions by Andre Buchanan.
 */

"use strict";

angular.module("btford.markdown", []).
  directive("markdown", function () {
    var converter = new Showdown.converter();
    return {
      restrict: "AE",
      link: function (scope, element, attrs) {
        // If the intention here is to monitor an attr and create markdown when the
        // value of the attr changes, scope.$watch doesn"t work. Use attr.$observe
        // as of 1.0.7.
        attrs.$observe("markdown", function(newValue)
        {
          if (newValue === undefined) return;
          var md = converter.makeHtml(newValue);
          element.html(md);
        });
        if (element.text())
        {
          var md = converter.makeHtml(element.text());
          element.html(md);
        }
      }
    };
  });
})();