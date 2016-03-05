(function(){
    
    angular.module("socialNetwork")
        .controller("mainController", ["$scope", "$http", "$state", "$interval", function($scope, $http, $state, $interval){
            //console.log("mainController working");
            $scope.diff = 0;
            $scope.posts = [];
            $scope.initial = true;
            
            
            
            $scope.postIt = function(event){
               // console.log("postIt called");
                //console.log(event);
                if(event.keyCode == 13){
                    console.log("enter pressed");
                    $http.post("/post", {userid: JSON.parse(localStorage.udata).userid, post: $scope.post}).success(function(posts){
                        console.log("posted")
                        $scope.posts = posts;

                    }).error(function(err){
                        
                        console.log(err);
                        
                    });
                }
                
            }
            
            $scope.getPosts = function(initial){
                
                $http.get("/posts").success(function(res){
                    if(initial){
                        console.log("initial call");
                        $scope.posts = res;
                    }
                    else if(res.length > $scope.posts.length){
                        
                        console.log("new posts call")
                        $scope.newPosts = res;
                        
                    }
                }).error(function(err){
                    console.log(err)
                });
                
            }
            $scope.getPosts($scope.initial);
            
            $interval(function(){
                    console.log("interval call");
                    $scope.getPosts();
                    if($scope.newPosts !==undefined){
                        $scope.diff = $scope.newPosts.length - $scope.posts.length;
                    }
                    console.log("diff==============",$scope.diff);
                }, 3000);
            
            $scope.getNewPosts = function(){
                
                $scope.posts = angular.copy($scope.newPosts);
                $scope.newPosts = undefined;
                $scope.diff = 0;
                
            }
        }]);
    
}());