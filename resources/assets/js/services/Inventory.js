
/**
 * Inventory
 */

(function()
{
    var app = angular.module('app')

    app.service('Inventory', ['$q', '$http', '$httpParamSerializer', function($q, $http, $httpParamSerializer)
    {
        // Retourne la liste des modifications du stock
        this.all = function()
        {
            return $q(function(resolve, reject)
            {
                // Request
                $http({
                    method: 'GET',
                    url: '/api/inventory/all'
                })
                    .then(function(response)
                    {
                        resolve(response.data)
                    })
                    .catch(function(response)
                    {
                        reject()
                    })
            })
        }

        // Modifie le stock
        this.edit = function(name, description, items)
        {
            return $q(function(resolve, reject)
            {
                // Request
                $http({
                    method: 'POST',
                    url: '/api/inventory/edit',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: $httpParamSerializer({
                        name: name,
                        description: description,
                        'items[]': items,
                    })
                })
                    .then(function(response)
                    {
                        resolve()
                    })
                    .catch(function(response)
                    {
                        reject()
                    })
            })
        }

    }])

})();