
/**
 * HomeController
 */

(function()
{
    var app = angular.module('app')


    app.controller('HomeController', ['$scope', function($scope)
    {
        console.log("hello2")
        // Current page
        $scope.$emit('setCurrentPage', 'Home')

        console.log("hello")
    }])

})();
