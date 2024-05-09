import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import './card.css';

function HomeCard()  {
  return (
    <div>
      <Card
        color="light"
        style={{
          width: "18rem", marginRight:'2em',
        }} className="card-style"
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default HomeCard;