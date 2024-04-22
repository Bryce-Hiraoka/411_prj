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
    const eventData = req.app.locals.data;
    console.log(eventData.name.text)
    id = '661dded9b27c5376ff27ae2a'
    User.findById(id).then( async (user) => {
        refreshToken = user.refresh
        oauth2Client.setCredentials({refresh_token: refreshToken})
        const calendar = google.calendar('v3');
        const response = await calendar.events.insert({
            auth: oauth2Client,
            calendarId: 'primary',
            requestBody: {
                summary: eventData.name.text,
                description: eventData.description.text,
                location: eventData.venue.address.localized_address_display,
                colorId: 6,
                start: {
                    dateTime: eventData.start.utc
                },
                end: {
                    dateTime: eventData.end.utc
                },
            }
        });
    });
    res.redirect('http://localhost:3000/events');
  });

router.post('/create-event', async (req, res, next) => {
    id = '661b35237c0bdcca45085168';
    User.findById(id).then((user) => {
      });

})

module.exports = router;