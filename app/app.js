var wpApp = angular.module('wpApp', [
  'ngRoute',
  'categoriesControllers',
  'postsControllers',
  'ngResource',
  'wpServices'
]);

wpApp.filter("sanitize", ['$sce', function($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  }
}]);

wpApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/posts', {
        templateUrl: 'views/posts-list.html',
        controller: 'PostsListCtrl'
      }).
      when('/posts/:postId', {
        templateUrl: 'views/post-details.html',
        controller: 'PostByIdCtrl'
      }).
      when('/categories/:categorySlug', {
        templateUrl: 'views/posts-list.html',
        controller: 'PostsByCategoryCtrl'
      }).
      otherwise({
        redirectTo: '/posts'
      });
  }]);

 wpApp.directive('wpNavbar', function() {
  return {
    restrict: 'E',
    templateUrl : 'views/navbar.html'
  };
});
