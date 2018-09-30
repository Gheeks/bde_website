
/**
 * AppController
 */

(function()
{
    var app = angular.module('app')

    app.controller('AppController', ['$scope', function($scope)
    {
        /**
         * Current page
         */

        $scope.page = ''
        $scope.$on('setCurrentPage', function(event, newPage)
        {
            $scope.page = newPage
        })
    }])

})();
