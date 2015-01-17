angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = [];
  $scope.addLink = function(url){
    $scope.link.push(url);
    $scope.url="";
  }

});
