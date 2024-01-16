# node-js-firebase-notification

Set up Node Js
```
npm install
npm start
```

try ```http://localhost:3000/send```

postman boby -> raw 
```json
{
    "token": "fcm token",
    "data": {
        "title":"calling",
        "body":"call desc",
        "action": "conferenceCall",
        "notification_data": {
            "user_img":"https://lh3.googleusercontent.com/yYfg__SGRj3ELVT3kcpto_hEBpyDEShR2HyKztmxiYxBIg2AKBokBC03XX8M72Zi2mX4bADa4pcg6PaWGJJ-qyDFAMK0rUJn1eBzdZXilA7cw74K70c=w1400-v0",
            "user_name":"hi",
            "title_calling":"Calling"
        }
    }
}
