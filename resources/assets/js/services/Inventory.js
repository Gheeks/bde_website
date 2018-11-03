
/**
 * Inventory
 */

(function()
{
    var app = angular.module('app')

    app.service('Inventory', ['$q', '$http', '$httpParamSerializer', function($q, $http, $httpParamSerializer)
    {
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