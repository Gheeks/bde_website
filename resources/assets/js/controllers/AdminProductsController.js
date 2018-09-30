
/**
 * AdminProductsController
 */

(function()
{
    var app = angular.module('app')

    app.controller('AdminProductsController', ['$scope', function($scope)
    {
        // Current page
        $scope.$emit('setCurrentPage', 'AdminProducts')
    }])

})();
