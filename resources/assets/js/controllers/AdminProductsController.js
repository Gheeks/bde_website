
/**
 * AdminProductsController
 */

(function()
{
    var app = angular.module('app')

    app.controller('AdminProductsController', ['$scope', 'Products', function($scope, Products)
    {
        // Current page
        $scope.$emit('setCurrentPage', 'AdminProducts')

        // Products
        $scope.products = []
        loadProducts()
        function loadProducts()
        {
            Products.all()
                .then(function(products)
                {
                    products.forEach(function(product) { product.new_stock = 0 })

                    $scope.products = products
                })
                .catch(function()
                {
                    alert("Erreur lors de la récupération des produits")
                })
        }

        // Add product
        $scope.addProduct_name = null
        $scope.addProduct_price = null
        $scope.addProductSubmit = function()
        {
            Products.add($scope.addProduct_name, $scope.addProduct_price)
                .then(function()
                {
                    $('#addProduct').modal('hide')
                    loadProducts()
                })
                .catch(function()
                {
                    alert("Erreur lors de la création de l'article")
                })

            return false
        }

        $('#addProduct').on('show.bs.modal', function(e)
        {
            $scope.$apply(function()
            {
                $scope.addProduct_name = ''
                $scope.addProduct_price = ''
            })
        })

        $('#addProduct').on('shown.bs.modal', function(e)
        {
            $('#addProduct_name').first().focus()
        })

        // Edit product
        $scope.editProduct_id = null
        $scope.editProduct_name = null
        $scope.editProduct_price = null
        $scope.editProduct = function(product)
        {
            $scope.editProduct_id = product.id
            $scope.editProduct_name = product.name
            $scope.editProduct_price = parseFloat(product.price)
            $('#editProduct').modal('show')
        }

        $scope.editProductSubmit = function()
        {
            Products.edit($scope.editProduct_id, $scope.editProduct_name, $scope.editProduct_price)
                .then(function()
                {
                    $('#editProduct').modal('hide')
                    loadProducts()
                })
                .catch(function()
                {
                    alert("Erreur lors de la modification de l'article")
                })

            return false
        }

        $('#editProduct').on('shown.bs.modal', function(e)
        {
            $('#editProduct_name').first().focus()
        })

        // Remove product
        $scope.removeProduct = function()
        {
            alert('Fonction non implémentée : supprime un article si le stock = 0')
        }
    }])

})();
