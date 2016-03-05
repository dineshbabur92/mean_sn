(function(){
    
    angular.module("socialNetwork")
        .directive("post", function(){
        
        return {
            
            restrict: "E",
            templateUrl:"/app/directives/post/post.html",
            replace: true,
            scope: {
                
                post: "="
                
            }
            
        };
        
    });
    
}());