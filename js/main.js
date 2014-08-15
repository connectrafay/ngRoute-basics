
angular.module('RootModule', ['ngRoute'])
  .controller('ExampleController', ['$scope', function($scope) 
  {
	console.log("ExampleController");
    $scope.header = 'views/header.html';
	$scope.footer = 'views/footer.html';
    
  }])
  
    .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
	console.log("config" + $routeProvider);
      $routeProvider
        .when('/welcome', {
          templateUrl: 'views/welcome.html',
          controller: 'WelcomeCtrl'        
		  })
        .when('/wizard1/:pageid', {
          templateUrl: 'views/wizard1.html',
          controller: 'Wizard1Ctrl'        
		  })
		.when('/wizard2/', {
          templateUrl: 'views/wizard2.html',
          controller: 'Wizard2Ctrl'        
		  })
		.otherwise({
        redirectTo: '/welcome'
      });
		;

      // configure html5 to get links working on jsfiddle
      //$locationProvider.html5Mode(true);
  }])
  .controller('WelcomeCtrl', ['$scope','$routeParams', '$location', function($scope, $routeParams, $location) {
  console.log("WelcomeCtrl");
    $scope.name = "WelcomeCtrl";
    $scope.params = $routeParams;
	
	$scope.submit = function()
	{
		console.log("ng-click WelcomeCtrl");
		$location.path("/wizard1/page1");
	}
	
  }])

  .controller('Wizard1Ctrl', ['$scope','$routeParams', function($scope, $routeParams) {
  console.log("Wizard1Ctrl");
    $scope.name = "Wizard1Ctrl";
    $scope.params = $routeParams;
	$scope.page1 = "";
	$scope.page2 = "";
	$scope.page3 = "";
	$scope.page4 = "";
	$scope.page5 = "";
	
	var pageName = "views/" + $scope.params.pageid + ".html";
	switch($scope.params.pageid)
	{
		case "page1":
			$scope.page1 = pageName;
			break;
		case "page2":
			$scope.page2 = pageName;
			break;
		case "page3":
			$scope.page3 = pageName;
			break;
		case "page4":
			$scope.page4 = pageName;
			break;
		case "page5":
			$scope.page5 = pageName;
			break;
	}
	
	
	
	
  }])
  .controller('Wizard2Ctrl', ['$scope','$routeParams', function($scope, $routeParams) {
  console.log("Wizard2Ctrl");
    $scope.name = "Wizard2Ctrl";
    $scope.params = $routeParams;
  }])
   .controller('Page1Ctrl', ['$scope','$routeParams', '$location', function($scope, $routeParams, $location) {
  console.log("Page1Ctrl");
    $scope.name = "Page1Ctrl";
    $scope.params = $routeParams;
	
	$scope.submit = function()
	{
		console.log("ng-click Page1Ctrl");
		$location.path("/wizard1/page2");
	}
	
	
  }])
   .controller('Page2Ctrl', ['$scope','$routeParams', '$location', function($scope, $routeParams, $location) {
  console.log("Page2Ctrl");
    $scope.name = "Page2Ctrl";
    $scope.params = $routeParams;
	
	$scope.submit = function()
	{
		console.log("ng-click Page2Ctrl");
		$location.path("/wizard1/page3");
	}
	
	
  }])
   .controller('Page3Ctrl', ['$scope','$routeParams', '$location', function($scope, $routeParams, $location) {
  console.log("Page3Ctrl");
    $scope.name = "Page3Ctrl";
    $scope.params = $routeParams;
	
	$scope.submit = function()
	{
		console.log("ng-click Page3Ctrl");
		$location.path("/wizard1/page4");
	}
	
	
  }])
   .controller('Page4Ctrl', ['$scope','$routeParams', '$location', function($scope, $routeParams, $location) {
  console.log("Page4Ctrl");
    $scope.name = "Page4Ctrl";
    $scope.params = $routeParams;
	
	$scope.submit = function()
	{
		console.log("ng-click Page4Ctrl");
		$location.path("/wizard1/page5");
	}
	
	
  }])
   .controller('Page5Ctrl', ['$scope','$routeParams', '$location', function($scope, $routeParams, $location) {
  console.log("Page5Ctrl");
    $scope.name = "Page5Ctrl";
    $scope.params = $routeParams;
	
	$scope.submit = function()
	{
		console.log("ng-click Page5Ctrl");
		$location.path("/wizard1/page6");
	}
	
	
  }])
 
  ;