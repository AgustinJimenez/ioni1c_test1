(function(){
  var app = angular.module('cliente.controller', ['cliente.provider', 'cliente.routes']);

  app.controller("ClienteController", function( $scope, ClienteProvider )
  {
    $scope.clientes = ClienteProvider.list();
    $scope.destroy = function (id)
    {
    	ClienteProvider.destroy(id);
    }
  });

  app.controller("ClienteEditController", function( $scope, $state, ClienteProvider )
  {
    $scope.cliente = angular.copy( ClienteProvider.get( $state.params.id ) );
    $scope.save = function ()
    {
      ClienteProvider.update( $scope.cliente );
      $state.go('list');
    }
  });

  app.controller("ClienteCreateController", function($scope, $state, ClienteProvider )
  {
    $scope.cliente = ClienteProvider.new();
    $scope.save = function ()
    {
      ClienteProvider.store( $scope.cliente );
      $state.go('list');
    }
  });






}());