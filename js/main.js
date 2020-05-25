window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }

    displayNotinication();

    
}

function displayNotinication(){
    if(Notification.permission === 'granted')
    {
        const actions = [
            {action: 'go', title: 'Go to the site', icon : 'check.png' },
            {action: 'go', title: 'no Thank you', icon : 'check.png' }
            ];
        const options = {
            body : 'Here is a notification body!',
            icon : 'images/hello-icon-144.png',
            vibration: [100, 50,100],
            data : { identity : 1 },
            actions : actions
        }
        navigator.serviceWorker.getRegistration()
        .then(reg => {
            reg.showNotification('hellow world',options)
        })
    }
    else{
        Notification.requestPermission(stat => {
            console.log('Status fot notification is' + status)
        })
    }
}