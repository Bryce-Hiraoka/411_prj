import React, { Component } from 'react';
import EventCard from '../components/EventCard'; 
import Timeline from '../components/Timeline';

const testEvents = [
    {
      name: { text: "BUJSA's OMATSURI 2024", html: 'BUJSA&#39;s OMATSURI 2024' },
      description: {
        text: "It's that time of the year we've all been waiting for! Welcome to BUJSA's Omatsuri 2024! We're so excited to invite you to our largest event",
        html: "It's that time of the year we've all been waiting for! Welcome to BUJSA's Omatsuri 2024! We're so excited to invite you to our largest event"
      },
      url: 'https://www.eventbrite.com/e/bujsas-omatsuri-2024-tickets-850989190577',
      vanity_url: 'https://omatsuri2024.eventbrite.com',
      start: {
        timezone: 'America/New_York',
        local: '2024-03-31T17:00:00',
        utc: '2024-03-31T21:00:00Z'
      },
      end: {
        timezone: 'America/New_York',
        local: '2024-03-31T20:30:00',
        utc: '2024-04-01T00:30:00Z'
      },
      venue: {
        address: {
          address_1: '775 Commonwealth Ave',
          city: 'Boston',
          region: 'MA',
          postal_code: '02215',
          country: 'US',
          localized_address_display: '775 Commonwealth Ave, Boston, MA 02215',
        },
        name: 'GSU Metcalf Ballroom',
      }
    }
  ];
  
  const fallTimelineEvents = [
    {
      title: "SPLASH! (BU's Club Fair)",
      time: "Early September",
      images: [
        "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(135).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(136).webp",
        // more images...
      ],
      description: "Description for Event 1"
    },
    {
      title: "Event 2",
      time: 2018,
      images: [
        "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(137).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(138).webp",
        // more images...
      ],
      description: "Description for Event 2"
    },
    // more events...
  ];

  class Events extends Component {
    render() {
        return (
            <div style={{ paddingTop: '58px', fontFamily: 'Arial Rounded MT Bold'}}>
                <div style = {{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 style={{ paddingTop: '100px', paddingBottom: '100px' }}>JSA EVENTS!</h1>
                    {testEvents.map((event, index) => (
                        <EventCard event={event} key={index} />
                    ))}
                </div>
                <div style = {{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 style={{ paddingTop: '100px', paddingBottom: '0px' }}>FALL EVENTS</h1>
                </div>
                <div style={{ paddingLeft: '40px', paddingRight: '40px' }}>
                    <Timeline events={fallTimelineEvents} />
                </div>
            </div>
        );
    }
}

export default Events;