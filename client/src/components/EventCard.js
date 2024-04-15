import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const EventCard = ({ event }) => (
  <Card style={{ width: '70rem', margin: '10px' }}>
    <Card.Body>
      <Card.Title>{event.name.text}</Card.Title>
      <Card.Text>{event.description.text}</Card.Text>
      <Card.Text>{`Date: ${new Date(event.start.local).toLocaleString()}`}</Card.Text>
      <Card.Text>{`Location: ${event.venue.address.localized_address_display}`}</Card.Text>
      <Button variant="primary" href={event.vanity_url}>Go to Event</Button>
    </Card.Body>
  </Card>
);

export default EventCard;