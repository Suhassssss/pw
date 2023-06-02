var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();

// console.log(vapidKeys);

let vapidKeys = {
    publicKey: 'BO0lroh6TFP28HfWpuYuScYKaPh2FAnVDo8coh28f-T8Eu8OQaPtg0PhHOCUFrieCrFsZTp4UT-RgOjTSjQxgm8',
    privateKey: '8c_yFL3zXda4mBvmO80ea4XS7BJGZpOMwuDElyAePqk'
  }

push.setVapidDetails('mailto:suhasrlawate99@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {
    endpoint:
        "https://fcm.googleapis.com/fcm/send/fgK_Ua_sgwo:APA91bFbb4SlFqG5eJqhsbmebLSqvh9sGjxHVtbqF2vsedECOIxnlFlqeaLh5MPYX1X8GXPeg2H-6tzI9zaf8Vd99cdxCKKcLzQYEDxv5QcmleVZYvOgE0SlX4QuDbZjU6HHQ9J1qakN",
        expirationTime:null,
        keys:{
            p256dh:
                "BOpJK4MboKFox8p3gPRPP9kMKsnJpwuhx_35Crm1TomASOw2siEbQOFtXP20AEY3ebT1g7X6t4Zkj2-TN7v0TE8",
            auth:"J0dVUyEJoUm6R7GxUb1Jfg"
        }
    };
push.sendNotification(sub, 'test message')