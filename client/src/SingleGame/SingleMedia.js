import React, { Component } from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

class SingleMedia extends Component {
  render() {
    let propsCover, insertCover, youtubeLink;
    if (this.props.url) {
      propsCover = this.props.url;
      if (propsCover.indexOf("thumb") !== -1) {
        insertCover = propsCover.replace("thumb", "screenshot_med");
      } else {
        insertCover = propsCover;
      }
    } else if (this.props.vidId) {
      youtubeLink = `https://www.youtube.com/embed/${this.props.vidId}`;
    }

    return (
      <>
        {this.props.url ? (
          <Col lg={6}>
            <img className="s-media" src={insertCover} alt="..." />
          </Col>
        ) : (
          <Col lg={6}>
            <Card className="s-media">
              <CardHeader tag="h2">{this.props.vidName}</CardHeader>
              <CardBody>
                <div className="embed-responsive embed-responsive-16by9 s-media">
                  <iframe className="embed-responsive-item" title={this.props.vidName} src={youtubeLink} allowFullScreen></iframe>
                </div>
              </CardBody>
            </Card>
          </Col>
        )}
      </>
    );
  }
};

SingleMedia.propTypes = {
  url: PropTypes.string,
  vidName: PropTypes.string,
  vidId: PropTypes.string
}

export default SingleMedia;
