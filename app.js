const express = require('express');
const app = express();
const port = 3000;

const myFunctions = require('./notification');
app.use(express.json());


app.post('/send', (req, res) => {

    const token = req.body.token;
    const data = req.body.data;

    const result = myFunctions.sendPushNotification(token,data);
    res.send(result);
});

app.get('/', (req, res) => {
    res.send("hello wutdy");
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
