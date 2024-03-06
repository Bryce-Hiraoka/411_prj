const express = require('express');
const app = express();
const http = require('http');
const ax = require('axios');
const querystring = require('querystring');
require('dotenv').config();
const port = process.env.PORT || 5000;

app.get('/', async (req, res) => {
    try {
        const eventId = process.env.eventId
        
        const apiUrl = `https://www.eventbriteapi.com/v3/events/${eventId}/?expand=venue`;

        const headers = {
            'Authorization' : `Bearer ${process.env.JSA_Token}`,
        };

        const response = await ax.get(apiUrl, { headers });

        const data = {
            name: response.data.name.text,
            description: response.data.description.text,
            url: response.data.url,
            data: response.data.start.local,
            startTime: response.data.start.local,
            endTime: response.data.end.local,
            address: response.data.venue.address.localized_address_display,
            ven_name: response.data.venue.name,
        };

        res.json(data);
    } catch(error) {
        console.error('Fetch errror:', error)
        res.status(500)
    }
});

app.listen(port, () => console.log(`Listening on port 5000`));
