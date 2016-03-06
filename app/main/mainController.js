(function(){
    
    angular.module("socialNetwork")
        .controller("mainController", ["$scope", "$http", "$state", "$interval", function($scope, $http, $state, $interval){
            //console.log("mainController working");
            $scope.diff = 0;
            $scope.posts = [];
            $scope.initial = true;
            $scope.userid = localStorage.udata ? JSON.parse(localStorage.udata).userid : undefined;
            
            
            $scope.postIt = function(event){
               // console.log("postIt called");
                //console.log(event);
                var postParams = {};
                postParams.post = $scope.post;
                postParams.userid = $scope.userid ? $scope.userid : undefined;
            
                if(event.keyCode == 13){
                    console.log("enter pressed");
                    if(postParams.userid){
                        $http.post("/post", postParams).success(function(posts){
                            console.log("posted")
                            $scope.posts = posts;

                        }).error(function(err){

                            console.log(err);

                        });
                    }
                    else {
                        console.log("please sign in to post");
                    }
                }
                
            }
            
            $scope.getPosts = function(initial){
                
                var getParams = {};
                getParams.userid = $scope.userid ? $scope.userid : undefined;
                $http({
                        url: "/posts", 
                        method: "GET",
                        params: getParams
                     })
                
//                $http.get("/posts",{userid:JSON.parse(localStorage.udata).userid})
                    .success(function(res){
                    if(initial){
                      //  console.log("initial call");
                        $scope.posts = res;
                    }
                    else if(res.length > $scope.posts.length){
                        
                      //  console.log("new posts call")
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