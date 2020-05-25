window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }

    displayNotinication();

    
}

function displayNotinication(){
    const options = {
        body : 'Here is a notification body!',
        icon : 'images/hello-icon-144.png',
        vibration: [100, 50,100],
        data : { identity : 1 }
    }
    if(Notification.permission === 'granted')
    {
        navigator.serviceWorker.getRegistration()
        .then(reg => {
            reg.showNotification('hellow world')
        })
    }
    else{
        Notification.requestPermission(stat => {
            console.log('Status fot notification is' + status)
        })
    }
}