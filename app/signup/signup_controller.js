(function(){
    
    angular.module("socialNetwork")
        .controller("signupController", ["$scope", "$state", "$http", function($scope, $state, $http){
            
            $scope.submit = function(){
                console.log("submit clicked");
                $http.post("/signup", $scope.newUser).success(function(response){
                    console.log("responded");
                    console.log(response);
                    
                }).error(function(error){
                    console.log("error");
                    console.log(error);
                    
                });
                
            };
            
            
        }]);
    
}());