import React, {Component, Fragment} from 'react';

class WelcomeHeader extends Component {
  render() {
    return (
      <Fragment>
        <div className="my-profile-settings">

<h6 className="lead welcome-to-profile">
  <span className="btn btn-outline-info">Welcome to my profile </span> 
  <span className="btn btn-outline-info follow-me">
    follow or email me
    </span>
    </h6>
        </div>
      </Fragment>
    )
  }
}

export default WelcomeHeader;