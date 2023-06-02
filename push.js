var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();

// console.log(vapidKeys);

let vapidKeys = {
    publicKey: 'BO0lroh6TFP28HfWpuYuScYKaPh2FAnVDo8coh28f-T8Eu8OQaPtg0PhHOCUFrieCrFsZTp4UT-RgOjTSjQxgm8',
    privateKey: '8c_yFL3zXda4mBvmO80ea4XS7BJGZpOMwuDElyAePqk'
  }

push.setVapidDetails('mailto:suhasrlawate99@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    endpoint:
        "https://fcm.googleapis.com/fcm/send/fLx9crZsLEg:APA91bFcV7kiNUVM_Sai744eHPut-wIGGQLFKNIfDkjL-HNxsH4rDI89xoJ13yskru0FBGuZGlBSEMWCyAWmMsVjYpUwtgcCsyJZIn0OO0vjGAWkNgeIjjvGmvMBO60NafHRX8mqd1DO",
        expirationTime:null,
        keys:{
            p256dh:
                "BF_p3qReW3FEWREN3XHJGuJaAqA4e9lWUDELztZarRw_x9Nhw8Lv7CGyY1q_VsPiwLBiO93IImdNoxjWZM4AQmg",
            auth:"tNsTpeg8Z9_qO20EM9Jyfg"
        }
    };

push.sendNotification(sub, 'test message')