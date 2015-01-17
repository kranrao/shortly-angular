angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  angular.extend($scope, $location, $http, Links);
  $scope.addLink = function(url){
    $scope.url = "";
    $http({
      method: 'POST',
      url: '/api/links',
      data: {url: url}
    })
    .then(function (resp) {
      console.log("url recorded");
    });

  }
});
