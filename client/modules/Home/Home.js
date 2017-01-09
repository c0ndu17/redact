import React, { PropTypes, Component } from 'react';

import { connect } from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';

class HomePage extends Component {


  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        Welcome Home.
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
  };
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

HomePage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(HomePage);
