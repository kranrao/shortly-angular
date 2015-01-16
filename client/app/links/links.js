angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.links=["luke.com","kiran.com"];
  $scope.testText="test text";
});
