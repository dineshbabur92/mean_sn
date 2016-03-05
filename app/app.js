(function(){
//    var socialNetwork = angular.module("socialNetwork",["ui.router"]);
    angular.module("socialNetwork",["ui.router", "ngFileUpload"])
        .config(function($stateProvider, $urlRouterProvider){
        
        $urlRouterProvider.otherwise("/");
        
        
        $stateProvider
        
        .state("signup", {
            
            url: "/signup",
            templateUrl: "/app/signup/signup.html",
            controller: "signupController"
            
        })
        
        .state("edit", {
            
            url: "/edit",
            templateUrl:"/app/edit/edit.html",
            controller: "editController"
            
        })
        
        .state("main", {
            
            url:"/",
            templateUrl: "/app/main/main.html",
            controller: "mainController"
            
        })
        
    })
    
}());