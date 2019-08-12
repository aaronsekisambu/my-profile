import React, {Component, Fragment} from 'react';

class SocialMediaIcons extends Component {
  render () {
    return (
      <Fragment>

<div className="social-icons">
                  <ul className="social_section_1info mt-4">
                    <li className="mb-2 mr-4 facebook">
                      <i className="zmdi zmdi-facebook pl-1"></i>
                    </li>
                    <li className="mb-2 mr-4 gitHub">
                        <i className="zmdi zmdi-github-alt pl-1"></i>
                    </li>
                    <li className="mb-2 mr-4 google">
                      <i className="zmdi zmdi-google pl-1"></i>
                    </li>
                    <li className="mb-2 mr-4 twitter">
                      <i className="zmdi zmdi-twitter pl-1"></i>
                    </li>
                    <li className="mb-2 mr-4 linkedIn">
                      <i className="zmdi zmdi-linkedin pl-1"></i>
                    </li>
                  </ul>
                  </div>
      </Fragment>
    )
  }
};

export default SocialMediaIcons;