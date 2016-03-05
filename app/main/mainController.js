(function(){
    
    angular.module("socialNetwork")
        .controller("mainController", ["$scope", "$http", "$state", function($scope, $http, $state){
            console.log("mainController working");
            $scope.postIt = function(event){
                console.log("postIt called");
                console.log(event);
                if(event.keyCode == 13){
                    console.log("enter pressed");
                    $http.post("/post", {userid: JSON.parse(localStorage.udata).userid, post: $scope.post}).success(function(posts){
                        console.log("posted")
                        console.log(posts);

                    }).error(function(err){
                        
                        console.log(err);
                        
                    });
                }
                
            }
            
        }]);
    
}());