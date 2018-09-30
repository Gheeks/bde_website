
/**
 * HomeController
 */

(function()
{
    var app = angular.module('app')


    app.controller('HomeController', ['$scope', function($scope)
    {
        // Current page
        $scope.$emit('setCurrentPage', 'Home')
    }])

})();
