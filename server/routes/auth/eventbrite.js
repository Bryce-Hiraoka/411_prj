const router = require('express').Router();
require('dotenv').config();

eventID = process.env.eventId;

organID = process.env.organizationId;

//gets info for a specific event
eventBriteURL='https://www.eventbriteapi.com/v3/events/'+ eventID +'/?expand=venue'

//gets all events in organization
eventURL='https://www.eventbriteapi.com/v3/organizations/'+ organID +'/events/'

key = process.env.JSA_Token


router.get('/', async (req, res) => {
    fetch(eventBriteURL, {
        headers: {
            'Authorization': 'Bearer ' + key
        }
    })
    .then(response => {
        if(!response.ok) {
            res.send('error');
        }
        return response.json()
    })
    .then(data => {
        req.app.locals.data = data;
        res.redirect('http://localhost:5000/calendar');
    })
    .catch(error => {
        console.error(error)
    })
});

module.exports = router;