import React from 'react';
import { Row, Col, Card, CardBody, CardText } from 'reactstrap';
import PropTypes from 'prop-types';

const Summary = (props) => {
  let summary;
  props.game.summary ? summary = props.game.summary : summary = "No summary available";
  return (
    <Row>
      <Col></Col>
      <Col lg={8}>
        <Card className="m-spacing m-spacing-bottom">
          <CardBody>
            <CardText className="text-center" tag="p">{summary}</CardText>
          </CardBody>
        </Card>
      </Col>
      <Col></Col>
    </Row>
  );
}

Summary.propTypes = {
  game: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired
}

export default Summary;
