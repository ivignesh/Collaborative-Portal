var app=angular.module("app",['ngRoute','ngCookies'])
app.config(function($routeProvider){
	$routeProvider
	
									/*User Login,Reg,Home,Profile Pic Upload*/
	
	.when('/register',{
		templateUrl:'_user/registerUser.html',
		controller:'UserController'
	})
	.when('/login',{
		templateUrl:'_user/login.html',
		controller:'UserController'
	})
	.when('/home',{
		templateUrl:'_home/home.html'
	})	
	.when('/profilepic',{
		templateUrl:'_user/profilepic.html'
	})
	
													/*Edit User*/
	
	.when('/edituser',{
		templateUrl:'_user/edituserform.html',
		controller:'EditController'
	})
	
													/*Job Module*/
	
	.when('/addJob',{
		templateUrl:'_job/jobform.html',
		controller:'JobController'
	})
	.when('/getAllJobs',{
		templateUrl:'_job/jobtitles.html',
		controller:'JobController'
	})
	
													/*Blog Module*/
	
	.when('/addPost',{
		templateUrl:'_blog/blogForm.html',
		controller:'BlogController'
	})
	.when('/getAllBlogs',{
		templateUrl:'_blog/getBlogTitles.html',
		controller:'BlogController'
	})
	.when('/getBlogDetail/:id',{
		templateUrl:'_blog/getBlogDetail.html',
		controller:'BlogDetailController'
	})
	.when('/getBlogForApproval/:id',{
		templateUrl:'_blog/getBlogForApproval.html',
		controller:'BlogDetailController'
	})
	
													/*Friend Module*/
	
	.when('/getAllUsers',{
		templateUrl:'_friend/userslist.html',
		controller:'FriendController'
	})
	.when('/pendingRequests',{
		templateUrl:'_friend/pendingRequests.html',
		controller:'FriendController'
	})	
	.when('/friendlist',{
		templateUrl:'_friend/friendlist.html',
		controller:'FriendController'
	})
})

app.run(function($rootScope,$cookieStore,UserService,$location){
	console.log('entering run method ')
	console.log($rootScope.currentUser)
	if($rootScope.currentUser==undefined){
		$rootScope.currentUser=$cookieStore.get("currentUser")
		console.log($rootScope.currentUser)
	}
	$rootScope.logout=function(){
		console.log('logout function')
		delete $rootScope.currentUser;
		$cookieStore.remove('currentUser')
		UserService.logout()
		.then(function(response){
			console.log("logged out successfully..");
			
			$rootScope.message="Logged out Successfully"
			$location.path('/login')
		},
		function(response){
			console.log(response.status);
		})
	}
})