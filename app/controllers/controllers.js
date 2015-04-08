/* POSTS */
var postsControllers = angular.module('postsControllers', []);

postsControllers.controller('PostsListCtrl', ['$scope', '$http', 'dataFactory',
  function ($scope, $http, dataFactory) {
    dataFactory.getPosts()
    .success(function (data) {
                $scope.posts = data.posts;
                $scope.status = "OK last 10";
            });
  /*$http.get('https://public-api.wordpress.com/rest/v1.1/sites/blog.ghislain-lerda.com/posts/?number=10').success(function(data) 
  {
    $scope.posts = data.posts;
  });*/
}]);

postsControllers.controller('PostsByCategoryCtrl', ['$scope', '$routeParams', '$http','dataFactory',
  function($scope, $routeParams, $http, dataFactory) {
    dataFactory.getPostsByCategory($routeParams.categorySlug)
    .success(function (data) {
                $scope.posts = data.posts;
                $scope.status = "OK by category";
            });
    /*$http.get('https://public-api.wordpress.com/rest/v1.1/sites/blog.ghislain-lerda.com/posts/?category=' + $routeParams.categorySlug).success(function(data) {
      $scope.posts = data.posts;
    });*/
  }]);

postsControllers.controller('PostByIdCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('https://public-api.wordpress.com/rest/v1.1/sites/blog.ghislain-lerda.com/posts/' + $routeParams.postId).success(function(data) {
      $scope.post = data;
      $scope.thisCanBeusedInsideNgBindHtml = $sce.trustAsHtml(data.content);
    });
  }]);

/* CATEGORIES */
var categoriesControllers = angular.module('categoriesControllers', []);

categoriesControllers.controller('CategoriesListCrtl', ['$scope', '$http', '$location',
	function($scope, $http, $location){
		$http.get('https://public-api.wordpress.com/rest/v1/sites/blog.ghislain-lerda.com/categories/?number=10').success(function(data)
		{
			$scope.categories = data.categories;
		});		

		$scope.isActive = function (viewLocation) { 
        	return viewLocation === $location.path();
    	};
}])


// last 100 posts with cat = javascript
//https://public-api.wordpress.com/rest/v1.1/sites/blog.ghislain-lerda.com/posts/?category=javascript
// last 10 posts
//https://public-api.wordpress.com/rest/v1.1/sites/blog.ghislain-lerda.com/posts/?number=10&pretty=1
// post with ID = 1
//https://public-api.wordpress.com/rest/v1.1/sites/blog.ghislain-lerda.com/posts/7/?pretty=1
// 10 categories
//https://public-api.wordpress.com/rest/v1/sites/blog.ghislain-lerda.com/categories/?number=10&pretty=1