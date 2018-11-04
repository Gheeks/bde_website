
/**
 * PurchasesHistoryController
 */

(function()
{
    var app = angular.module('app')

    app.controller('PurchasesHistoryController', ['$scope', 'Purchases', function($scope, Purchases)
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
                alert("Erreur lors de la récupération des données")
            })
    }])

})();
