angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  angular.extend($scope, $location, $http, Links);
  $scope.createFailed=false;
  $scope.addLink = function(url){
    $scope.url = "";
    $http({
      method: 'POST',
      url: '/api/links',
      data: {url: url}
    })
    .error(function(data,status,headers,config){
      $scope.createFailed=true;
    })
    .then(function (resp) {
      $scope.createFailed=false;
      console.log("url recorded");
    });

  }
});
