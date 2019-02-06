import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import SingleMedia from './SingleMedia';
import AlertMsg from '../Utils/AlertMsg';

class Media extends Component {
  render() {
    let mediaArray;
    if (this.props.mediaType) {
      mediaArray = this.props.mediaType.map( m => {
        if (this.props.name === "Screenshots") {
          return <SingleMedia
                    key={m.id}
                    url={m.url} />
        } else {
          return <SingleMedia
                    key={m.id}
                    vidName={m.name}
                    vidId={m.video_id} />
        }
      });
    }

    return (
      <Row className="s-spacing-bottom" noGutters>
        <Col lg={12}>
          <Row>
            {this.props.mediaType ? (
              mediaArray
            ) : (
              <Col className="s-media" lg={12}>
                <AlertMsg
                  type={this.props.name} />
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    );
  }
}

Media.propTypes = {
  name: PropTypes.string.isRequired,
  mediaType: PropTypes.array.isRequired
}

export default Media;
