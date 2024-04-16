import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const EventCard = ({ event }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/auth/protected', { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          setIsLoggedIn(true);
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          setIsLoggedIn(false);
        }
        console.log(isLoggedIn);
      });
  }, []);

  return (
    <Card style={{ width: '70rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{event.name.text}</Card.Title>
        <Card.Text>{event.description.text}</Card.Text>
        <Card.Text>{`Date: ${new Date(event.start.local).toLocaleString()}`}</Card.Text>
        <Card.Text>{`Location: ${event.venue.address.localized_address_display}`}</Card.Text>
        <Button variant="primary" href={event.vanity_url}>Go to Event</Button>
        {isLoggedIn ? <Button style={{ marginLeft: '10px' }} variant="outline-primary" href="http://localhost:5000/calendar">Add to your google calendar</Button> : null}
      </Card.Body>
    </Card>
  );
};

export default EventCard;