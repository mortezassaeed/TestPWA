window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }

    displayNotinication();

    
}

function displayNotinication(){
    debugger;
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