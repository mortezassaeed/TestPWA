window.onload = () => {
    'use strict';
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }
}


function displayLocalNotinication(tilte, body, action, icon, data) {
    if (Notification.permission === 'granted') {
        const actions = [
            { action: 'go', title: 'Go to the site', icon: 'check.png' },
            { action: 'close', title: 'no Thank you', icon: 'check.png' }
        ];
        const options = {
            "//": "Visual Options",
            "body": "<String>",
            "icon": "<URL String>",
            "image": "<URL String>",
            "badge": "<URL String>",
            "vibrate": "<Array of Integers>",
            "sound": "<URL String>",
            "dir": "<String of 'auto' | 'ltr' | 'rtl'>",
            "//": "Behavioural Options",
            "tag": "<String>",
            "data": "<Anything>",
            "requireInteraction": "<boolean>",
            "renotify": "<Boolean>",
            "silent": "<Boolean>",
            "//": "Both Visual & Behavioural Options",
            "actions": "<Array of Strings>",
            "//": "Information Option. No visual affect.",
            "timestamp": "<Long>",
            body: 'Here is a notification body!',
            icon: 'images/hello-icon-144.png',
            vibration: [100, 50, 100],
            data: { identity: 1 },
            actions: actions
        }
        navigator.serviceWorker.getRegistration()
            .then(reg => {
                reg.showNotification('hellow world', options)
            })
    }
    else {
        Notification.requestPermission(stat => {

        })
    }
}