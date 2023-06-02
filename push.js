var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();

// console.log(vapidKeys);

let vapidKeys = {
    publicKey: 'BO0lroh6TFP28HfWpuYuScYKaPh2FAnVDo8coh28f-T8Eu8OQaPtg0PhHOCUFrieCrFsZTp4UT-RgOjTSjQxgm8',
    privateKey: '8c_yFL3zXda4mBvmO80ea4XS7BJGZpOMwuDElyAePqk'
  }

push.setVapidDetails('mailto:suhasrlawate99@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test message')