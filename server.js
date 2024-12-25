// server.js
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = 3000;

// Twilio credentials
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API endpoint to send SMS
app.post('/send-sms', (req, res) => {
    const { to, message } = req.body;

    client.messages
        .create({
            body: message,
            from: '+16163192638', // e.g., +1234567890
            to: to,
        })
        .then((message) => res.status(200).send(`Message sent: ${message.sid}`))
        .catch((error) => res.status(500).send(error));
});

// Serve frontend (optional for hosting static files)
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
