//var testing;
(function(){
    
    angular.module("socialNetwork")
        .controller("followController",["$scope", "$http", "$state", function($scope, $http, $state){
            
            if(localStorage.udata){
                $scope.myuser = JSON.parse(localStorage.udata);
            }
            $scope.$watch(function(){return localStorage.udata;}, function(newVal, oldVal){
                
                if(newVal!==oldVal){
                    
                    $scope.myuser = JSON.parse(localStorage.udata);
                    
                }
                
            });  
//            $scope.myuser = JSON.parse(localStorage.udata);
//            $scope.following = JSON.parse(localStorage.udata).following;
            
            $http.get("/users").then(function(res){
                
                $scope.users = res.data
                console.log($scope.users);
              
                
            });
            
            $scope.followUser = function(following, follower){
                
            //    console.log({ "following": following, "follower": follower});
                $http.post("/users/follow",{ "following": following, "follower": follower}).success(function(){
                    
                    $scope.myuser.following.push({_id: following});
                  //  console.log("pushed following");
                    localStorage.udata = JSON.stringify($scope.myuser);
                  //  console.log(localStorage.udata);
                    
                });
                
            }
            
            $scope.isFollowing = function(userid){
                console.log("isfollowing called", userid, $scope.myuser.following);
                //var following = JSON.parse(localStorage.udata).following;
                for(var i in $scope.myuser.following){
                    //console.log($scope.following[i]);
                    if($scope.myuser.following[i]._id===userid){
                       // if(userid==="56db1a97cb750934133c82bb"){
                            console.log($scope.myuser.following[i]._id===userid);
                       // }
                        return true;
                        
                    }
                    
                }
                return false;
                
            }
    }]);
    
}());