var wpServices = angular.module('wpServices', ['ngResource']);

wpServices.factory('dataFactory', ['$http','$sce', function($http, $sce) {

    var urlBase1 = 'https://public-api.wordpress.com/rest/v1/sites/blog.ghislain-lerda.com';
    var urlBase = 'https://public-api.wordpress.com/rest/v1.1/sites/blog.ghislain-lerda.com';

    var dataFactory = {};

    dataFactory.getPosts = function(){
        return $http.get(urlBase + '/posts/?number=10').success(function(data){
            var items = data.posts.map(function(item) {
                return cleanResult(item);
            });
            return items;
        });
    }

	dataFactory.getPostsByCategory = function(categorySlug){
        return $http.get(urlBase + '/posts/?category=' + categorySlug).success(function(data){
            var items = data.posts.map(function(item) {
                return cleanResult(item);
            });
            return items;
        });
    }

    dataFactory.getPost = function(postId){
        return $http.get(urlBase + '/posts/' + postId).success(function(data){
            return cleanResult(data);
        });
    }

    dataFactory.getCategories = function(){
        return $http.get(urlBase1 + '/categories/?number=10').success(function(data){
            return data;
        })
    }

    function cleanResult(result) {
        result.excerpt = $sce.trustAsHtml(result.excerpt);
        result.content = $sce.trustAsHtml(result.content);
        return result;
    }

    return dataFactory;
}]);