(function(){
  var app = angular.module('cliente.provider', []);
  app.factory("ClienteProvider", function()
  {
    var clientes = angular.fromJson( window.localStorage['notas'] || '[]' );
    function persist()
    {
      window.localStorage['clientes'] = angular.toJson( clientes );
    }
    return  {
              list: function()
              {
                return clientes;
              },

              new: function()
              { 
                return  { 
                          id: new Date().getTime().toString(), razon_social: "", cedula: "", ruc: ""
                        } 
              },

              get: function( id )
              {
                return clientes.filter(function(cliente){ return parseInt(cliente.id) === parseInt(id); })[0];
              },

              store: function( cliente )
              {
                clientes.push( cliente );
                persist();
              },

              update: function( cliente )
              {
                for (var i = 0; i < clientes.length; i++) 
                  if(clientes[i].id === cliente.id)
                  {
                    clientes[i] = cliente;
                    persist();
                    return;
                  }
              },

              destroy: function( id )
              {
                for (var i = 0; i < clientes.length; i++) 
                  if(clientes[i].id === id)
                  {
                    clientes.splice(i, 1);
                    persist();
                    return;
                  }
              }

            }
  });
}());