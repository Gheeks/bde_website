<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Amicale</title>
    <base href="/">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link href="css/style.min.css" rel="stylesheet">
</head>
<body ng-app="app" ng-controller="AppController">
    <div ng-include="'views/app.html'"></div>
    <script src="js/app.min.js"></script>
</body>
</html>