
/**
 * UsersController
 */

(function()
{
    var app = angular.module('app')

    app.controller('UsersController', ['$scope', function($scope)
    {
        // Current page
        $scope.$emit('setCurrentPage', 'Users')
    }])

})();
