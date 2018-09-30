
/**
 * InventoryManagerController
 */

(function()
{
    var app = angular.module('app')

    app.controller('InventoryManagerController', ['$scope', function($scope)
    {
        // Current page
        $scope.$emit('setCurrentPage', 'InventoryManager')
    }])

})();
