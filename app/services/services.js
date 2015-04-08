var wpServices = angular.module('wpServices', ['ngResource']);

wpServices.factory('dataFactory', ['$http', function($http) {

    var urlBase = 'https://public-api.wordpress.com/rest/v1.1/sites/blog.ghislain-lerda.com';
    var dataFactory = {};
    dataFactory.getPosts = function(){
    	return $http.get(urlBase + '/posts/?number=10');
    }

	dataFactory.getPostsByCategory = function(categorySlug){
    	return $http.get(urlBase + '/posts/?category=' + categorySlug);
    }    

    return dataFactory;
}]);

/*app.factory("Post", function($resource) {
  return $resource("/api/posts/:id");
});*/