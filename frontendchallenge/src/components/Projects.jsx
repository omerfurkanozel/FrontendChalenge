import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button,Card,CardLink,CardBody,CardText,CardTitle,CardSubtitle } from 'reactstrap';
function Projects (){

    return(
        <Card
  style={{
    width: '18rem'
  }}
>
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
  </CardBody>
  <img
    alt="Card cap"
    src="https://picsum.photos/318/180"
    width="100%"
  />
  <CardBody>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <CardLink href="#">
      Git Hub
    </CardLink>
    <CardLink href="#">
      View Site
    </CardLink>
  </CardBody>
</Card>
    )
      
}

export default Projects