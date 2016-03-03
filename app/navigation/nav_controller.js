(function(){
    
    angular.module("socialNetwork")
    .controller("navController",["$scope", "$state", "$http", function($scope, $state, $http){
        $scope.islogin = false;
//        $scope.$watch(function(){return localStorage.udata;}, function(nv, ov){
//            console.log(nv);
//            if(nv){
//            
//                $scope.islogin = false;
//            
//            }
//            else{
//                
//                $scope.islogin = true;
//                
//            }
//            
//        });
        
        if(localStorage.udata){ islogin=true; }
        $scope.login = function(){
           // console.log("login started");
            //console.log("scope login", $scope.login);
            
            $http.post("/login",$scope.cred).success(function(res){
                
               // console.log("success");
                localStorage.udata = JSON.parse(res);
                console.log(localStorage.udata);
                $scope.islogin = true;
                
            }).error(function(err){
                
                console.log(err);
                
            });

        }
        
    }]);
    
}());