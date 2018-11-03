
/**
 * Purchases
 */

(function()
{
    var app = angular.module('app')

    app.service('Purchases', ['$q', '$http', '$httpParamSerializer', function($q, $http, $httpParamSerializer)
    {
        // Retourne la liste des achats
        this.all = function()
        {
            return $q(function(resolve, reject)
            {
                // Request
                $http({
                    method: 'GET',
                    url: '/api/purchases/all'
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

        // Achat
        this.purchase = function(items)
        {
            return $q(function(resolve, reject)
            {
                // Request
                $http({
                    method: 'POST',
                    url: '/api/purchases/purchase',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: $httpParamSerializer({
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