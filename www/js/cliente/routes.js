(function(){
	var app = angular.module('cliente.routes', []);
	app.config( function( $stateProvider, $urlRouterProvider )
	{
		
		$stateProvider.state('list', 
	    {
	      url:'/list',
	      templateUrl: 'js/cliente/views/list.html'
	    });

	    $stateProvider.state('edit', 
	    {
	      url:'/edit/:id',
	      controller: 'ClienteEditController',
	      templateUrl: 'js/cliente/views/edit.html'
	    });

	    $stateProvider.state('create', 
	    {
	      url:'/create',
	      controller: 'ClienteCreateController',
	      templateUrl: 'js/cliente/views/edit.html'
	    });

	});

}());