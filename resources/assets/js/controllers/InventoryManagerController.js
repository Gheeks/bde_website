
/**
 * InventoryManagerController
 */

(function()
{
    var app = angular.module('app')

    app.controller('InventoryManagerController', ['$scope', 'Notifications', 'Products', 'Inventory', function($scope, Notifications, Products, Inventory)
    {
        // Current page
        $scope.$emit('setCurrentPage', 'InventoryManager')

        // Name & Description
        $scope.name = ''
        $scope.description = ''

        // Products
        $scope.products = []
        loadProducts()
        function loadProducts()
        {
            Products.all()
                .then(function(products)
                {
                    products.forEach(function(product) { product.delta_stock = 0 })

                    $scope.products = products
                })
                .catch(function()
                {
                    Notifications.error("Erreur lors de la récupération des produits")
                })
        }

        // Edit
        $scope.edit = function()
        {
            var ok = false
            $scope.products.forEach(function(product)
            {
                if (product.delta_stock != 0)
                    ok = true
            })

            if (!ok)
            {
                Notifications.error("Vous n'avez pas modifié le stock !")
                return
            }

            Inventory.edit($scope.name, $scope.description, $scope.products)
                .then(function()
                {
                    loadProducts()
                    $scope.name = ''
                    $scope.description = ''
                    Notifications.success("Stock modifié avec succès !")
                })
                .catch(function()
                {
                    Notifications.error("Erreur lors de la modification du stock")
                })

            return false
        }
    }])

})();
