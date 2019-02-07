import React from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

import { displayImage, video } from '../Utils/VariableAssignment';

const SingleMedia = (props) => {
  return (
    <>
      {props.imgId ? (
        <Col lg={6}>
          <img className="s-media" width="100%" src={displayImage(props.imgId, "screenshot_med", 569, 320, 24)} alt="..." />
        </Col>
      ) : props.vidId ? (
        <Col lg={6}>
          <Card className="s-media">
            <CardHeader tag="h2">{props.vidName}</CardHeader>
            <CardBody>
              <div className="embed-responsive embed-responsive-16by9 s-media">
                <iframe className="embed-responsive-item" title={props.vidName} src={video(props.vidId)} allowFullScreen></iframe>
              </div>
            </CardBody>
          </Card>
        </Col>
      ) : (
        <>
        </>
      )}
    </>
  );
};

SingleMedia.propTypes = {
  imgId: PropTypes.string,
  vidName: PropTypes.string,
  vidId: PropTypes.string
}

export default SingleMedia;
