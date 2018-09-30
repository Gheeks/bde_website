
/**
 * InventoryManagerController
 */

(function()
{
    var app = angular.module('app')

    app.controller('InventoryManagerController', ['$scope', 'Products', function($scope, Products)
    {
        // Current page
        $scope.$emit('setCurrentPage', 'InventoryManager')

        // Products
        $scope.products = []
        Products.all()
            .then(function(products)
            {
                products.forEach(function(product) { product.stock = 0 })
                products.forEach(function(product) { product.new_stock = 0 })

                $scope.products = products
            })
            .catch(function()
            {
                alert("Erreur lors de la récupération des produits")
            })
    }])

})();
