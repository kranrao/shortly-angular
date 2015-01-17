angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  angular.extend($scope, Links);
  // expecting links to be in: scope.data.links
  $scope.getLinks();
});
