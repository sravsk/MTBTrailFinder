import React, {PropTypes} from 'react';
import { Carousel, Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';



const Trail = (props) => (
  <Grid>
  { props.trails.map((trail, index) => {
    return (
      <a href={trail.url} target="_blank">
       <Row>
       <Col>
          <Thumbnail src={trail.imgMedium} className="trail-thumbnail">
            <h3>{trail.name}</h3>
            <p>{trail.summary}</p>
            <p>
              <p>Rating : {trail.stars}</p>
              <p>Location : {trail.location}</p>
              <p> Weather Conditions : {trail.conditionStatus}</p>
            </p>
          </Thumbnail>
        </Col>
  </Row>
</a>
)
  })
}
 </Grid>
)



export default Trail;

