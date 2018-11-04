
/**
 * InventoryManagerHistoryController
 */

(function()
{
    var app = angular.module('app')

    app.controller('InventoryManagerHistoryController', ['$scope', 'Notifications', 'Inventory', function($scope, Notifications, Inventory)
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
                Notifications.error("Erreur lors de la récupération des données")
            })
    }])

})();
