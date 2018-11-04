
/**
 * AdminProductsController
 */

(function()
{
    var app = angular.module('app')

    var IMAGE_WIDTH = 230
    var IMAGE_HEIGHT = 115

    app.controller('AdminProductsController', ['$scope', 'Notifications', 'Products', function($scope, Notifications, Products)
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
                    Notifications.error("Erreur lors de la récupération des produits")
                })
        }

        // Add / Edit
        $scope.productImage = null

        // Add product
        $scope.addProduct_name = null
        $scope.addProduct_price = null
        $scope.addProductSubmit = function()
        {
            Products.add($scope.addProduct_name, $scope.addProduct_price, $scope.productImage)
                .then(function()
                {
                    $('#addProduct').modal('hide')
                    loadProducts()
                    Notifications.success("Produit créé avec succès")
                })
                .catch(function()
                {
                    Notifications.error("Erreur lors de la création de l'article")
                })

            return false
        }

        $('#addProduct').on('show.bs.modal', function(e)
        {
            $scope.$apply(function()
            {
                $scope.addProduct_name = ''
                $scope.addProduct_price = ''
                $scope.productImage = null
                document.getElementById("addProduct_image").value = ''
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
            $scope.productImage = product.image
            document.getElementById("editProduct_image").value = ''
            $('#editProduct').modal('show')
        }

        $scope.editProductSubmit = function()
        {
            Products.edit($scope.editProduct_id, $scope.editProduct_name, $scope.editProduct_price, $scope.productImage)
                .then(function()
                {
                    $('#editProduct').modal('hide')
                    loadProducts()
                    Notifications.success("Produit modifié avec succès")
                })
                .catch(function()
                {
                    Notifications.error("Erreur lors de la modification de l'article")
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
            Notifications.error("Fonction non implémentée")
        }

        $scope.uploadedFile = function(element)
        {
            var currentFile = element.files[0]

            if (!currentFile)
                return

            var reader = new FileReader()
            reader.onload = function(event)
            {
                var img = document.createElement("img")
                img.src = event.target.result
                img.onload = function()
                {
                    var canvas = document.createElement("canvas")
                    canvas.width = IMAGE_WIDTH
                    canvas.height = IMAGE_HEIGHT
                    var ctx = canvas.getContext("2d")
                    ctx.drawImage(img, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT)
                    $scope.$apply(function()
                    {
                        $scope.productImage = canvas.toDataURL('image/png')
                    })
                }
            }
            reader.readAsDataURL(element.files[0])
        }

    }])

})();
