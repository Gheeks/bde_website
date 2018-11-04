
/**
 * Products
 */

(function()
{
    var app = angular.module('app')

    app.service('Products', ['$q', '$http', '$httpParamSerializer', function($q, $http, $httpParamSerializer)
    {
        // Retourne la liste de tous les articles
        this.all = function()
        {
            return $q(function(resolve, reject)
            {
                // Request
                $http({
                    method: 'GET',
                    url: '/api/products/all'
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

        // Ajoute un nouvel article
        this.add = function(name, price, image)
        {
            return $q(function(resolve, reject)
            {
                // Request
                $http({
                    method: 'POST',
                    url: '/api/products/add',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: $httpParamSerializer({
                        name: name,
                        price: price,
                        image: image
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

        // Modifier un article existant
        this.edit = function(id, name, price, image)
        {
            return $q(function(resolve, reject)
            {
                return reject()
                // Request
                $http({
                    method: 'POST',
                    url: '/api/products/edit',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: $httpParamSerializer({
                        id: id,
                        name: name,
                        price: price,
                        image: image
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