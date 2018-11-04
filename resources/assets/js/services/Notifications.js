
/**
 * Notifications
 */

(function()
{
    var app = angular.module('app')

    app.service('Notifications', function()
    {
        this.success = function(message)
        {
            var $alert = $('<div class="alert alert-success" role="alert"></div>')
            $alert.text(message)

            var $notification = $('<div class="notifications-alert"></div>')
            $notification.html($alert)

            $('#notifications').append($notification)

            $notification.hide()
            $notification.show(200, function()
            {
                setTimeout(function()
                {
                    $notification.hide(200, function()
                    {
                        $notification.remove()
                    })
                }, 2000)
            })
        }

        this.error = function(message)
        {
            alert("ERREUR\nMessage : " + message)
        }
    })

})();