/* POSTS */
var postsControllers = angular.module('postsControllers', []);

postsControllers.controller('PostsListCtrl', ['$scope', '$http', 'dataFactory',
  function ($scope, $http, dataFactory) {
    dataFactory.getPosts()
      .then(function (response) {
                $scope.posts = response.data.posts;
            });
}]);

postsControllers.controller('PostsByCategoryCtrl', ['$scope', '$routeParams', '$http','dataFactory',
  function($scope, $routeParams, $http, dataFactory) {
    dataFactory.getPostsByCategory($routeParams.categorySlug)
      .then(function (response) {
                $scope.posts = response.data.posts;
            });
  }]);

postsControllers.controller('PostByIdCtrl', ['$scope', '$routeParams', '$http','dataFactory',
  function($scope, $routeParams, $http, dataFactory) {
    dataFactory.getPost($routeParams.postId)
      .then(function(response){ 
        $scope.post = response.data; 
      });
  }]);

/* CATEGORIES */
var categoriesControllers = angular.module('categoriesControllers', []);

categoriesControllers.controller('CategoriesListCrtl', ['$scope', '$http', '$location', 'dataFactory',
	function($scope, $http, $location, dataFactory){   
    dataFactory.getCategories()
      .then(function (response) {
                $scope.categories = response.data.categories;
            });

		$scope.isActive = function (viewLocation) { 
      return viewLocation === $location.path();
    };
}])