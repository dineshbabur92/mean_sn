(function(){
    
    angular.module("socialNetwork")
    .controller("navController",["$scope", "$state", "$http", function($scope, $state, $http){
        
        $scope.login = function(){
            console.log("login started");
            $http.post("/login",$scope.login).success(function(res){
                
                console.log("success");
                localStorage.udata = res;
                console.log(localStorage);
                
            }).error(function(err){
                
                console.log(err);
                
            });

        }
        
    }]);
    
}());