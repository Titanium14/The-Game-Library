import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import AlertMsg from '../Utils/AlertMsg';

import { medias } from '../Utils/ObjectGenerator';

const Media = (props) => {
  return (
    <Row className="m-spacing-bottom" noGutters>
      <Col lg={12}>
        <Row>
          {props.mediaType ? (
            medias(props.mediaType, props.name)
          ) : (
            <Col className="s-media" lg={12}>
              <AlertMsg
                type={props.name} />
            </Col>
          )}
        </Row>
      </Col>
    </Row>
  );
}

Media.propTypes = {
  name: PropTypes.string.isRequired,
  mediaType: PropTypes.array
}

export default Media;
