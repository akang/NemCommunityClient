'use strict';
define(['jquery', 'Utils', 'SockJS', 'Stomp'], function($, Utils, SockJS) {

    var socket;
    var stompClient;
    var connected = false;

    socket = new SockJS('/ncc/api/trade_info');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function(frame) {
        connected = true;
    });
    stompClient.debug = null;

    var infoListener = Object.create(stompClient);

    infoListener.ensureConnected = function(callback) {
        if (connected) {
            callback();
            return;
        }
        var interval = setInterval(function() {
            if (connected) {
                callback();
                clearInterval(interval);
            }
        }, 3000)
    }

    infoListener.subscribe = function(destination, callback, subscriptionCb) {
        this.ensureConnected(function() {
            var subscription = stompClient.subscribe(destination, function(response) {
                callback(JSON.parse(response.body));
            });
            subscriptionCb(subscription);
        });
    };

    infoListener.unsubscribe = function() {
        stompClient
    };

    return infoListener;
});
