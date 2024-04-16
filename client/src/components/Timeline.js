import React from "react";
import { Card, Container, Carousel } from "react-bootstrap";

export default function Timeline({ events }) {
  return (
    <Container fluid className="py-5">
      <div className="main-timeline-2">
        {events.map((event, index) => (
          <div className={`timeline-2 ${index % 2 === 0 ? 'left-2' : 'right-2'}`}>
            <Card>
              <Carousel>
                {event.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt={`Slide ${index}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body className="p-4">
                <Card.Title className="fw-bold mb-4">{event.title}</Card.Title>
                <Card.Text className="text-muted mb-4">{event.time}</Card.Text>
                <Card.Text className="mb-0">{event.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}