
/**
 * InventoryManagerHistoryController
 */

(function()
{
    var app = angular.module('app')

    app.controller('InventoryManagerHistoryController', ['$scope', 'Inventory', function($scope, Inventory)
    {
        // Current page
        $scope.$emit('setCurrentPage', 'InventoryManagerHistory')

        // StockEdit
        $scope.stockEdits = []

        Inventory.all()
            .then(function(stockEdits)
            {
                $scope.stockEdits = stockEdits
            })
            .catch(function()
            {
                alert("Erreur lors de la récupération des données")
            })
    }])

})();
