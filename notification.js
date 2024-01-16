var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function sendPushNotification(deviceToken, data) {
  const message = {
    data: {
      title: data.title,
      body: data.body,
      action: data.action,
      notification_data: JSON.stringify(data.notification_data),
      priority: "high"
    },
    token: deviceToken,
  };

  try {
    const response = await admin.messaging().send(message);
    console.log('Successfully sent message:', response);
  } catch (error) {
    console.error('Error sending message:', error);
  }
}


module.exports = {
  sendPushNotification: sendPushNotification
};
