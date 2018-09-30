
(function()
{
    /**
     * App
     */

    var app = angular.module('app', ['ngRoute'])

    /**
     * Routes
     */

    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider)
    {
        $routeProvider
            .when('/home', {templateUrl : 'views/home.html', controller: 'HomeController'})
            .when('/admin/products', {templateUrl : 'views/admin_products.html', controller: 'AdminProductsController'})
            .when('/admin/inventory_manager', {templateUrl : 'views/inventory_manager.html', controller: 'InventoryManagerController'})
            .when('/admin/users', {templateUrl : 'views/users.html', controller: 'UsersController'})
            .otherwise({redirectTo : '/home'})

        $locationProvider.html5Mode(true)
    }]);

})();
