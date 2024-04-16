const router = require('express').Router();
const { google } = require('googleapis');
const User = require('../../usermodel');
require('dotenv').config();

const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "http://localhost:5000/auth/google/callback",
)

router.get('/', async (req, res) => {
    id = '661dded9b27c5376ff27ae2a'
    User.findById(id).then( async (user) => {
        console.log(user);
        refreshToken = user.refresh
        oauth2Client.setCredentials({refresh_token: refreshToken})
        const calendar = google.calendar('v3');
        const response = await calendar.events.insert({
            auth: oauth2Client,
            calendarId: 'primary',
            requestBody: {
                summary: "this is a test summary",
                description: "this is a test description",
                location: "700 CommonWealth Ave",
                colorId: 6,
                start: {
                    dateTime: new Date('April 15, 2024 03:24:00')
                },
                end: {
                    dateTime: new Date('April 15, 2024 06:24:00')
                },
            }
        });
    });
    res.send('complete')
  });

router.post('/create-event', async (req, res, next) => {
    id = '661b35237c0bdcca45085168';
    User.findById(id).then((user) => {
        console.log(user)
      });

})

module.exports = router;