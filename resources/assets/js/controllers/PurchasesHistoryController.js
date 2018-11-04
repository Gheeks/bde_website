
/**
 * PurchasesHistoryController
 */

(function()
{
    var app = angular.module('app')

    app.controller('PurchasesHistoryController', ['$scope', 'Notifications', 'Purchases', function($scope, Notifications, Purchases)
    {
        // Current page
        $scope.$emit('setCurrentPage', 'PurchasesHistory')

        // Purchases
        $scope.purchases = []

        Purchases.all()
            .then(function(purchases)
            {
                $scope.purchases = purchases
            })
            .catch(function()
            {
                Notifications.error("Erreur lors de la récupération des données")
            })
    }])

})();
