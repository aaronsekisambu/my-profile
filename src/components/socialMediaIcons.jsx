import React, {Component, Fragment} from 'react';

class SocialMediaIcons extends Component {
  render () {
    return (
      <Fragment>

<div className="social-icons">
                  <ul className="social_section_1info mt-4">
                     <a href="https://web.facebook.com/profile.php?id=100002941542848">
                    <li className="mb-2 mr-4 facebook">
                     <i className="zmdi zmdi-facebook pl-1"></i>
                    </li>
                       </a> 
                     <a href="https://github.com/aaronsekisambu">
                    <li className="mb-2 mr-4 gitHub">
                        <i className="zmdi zmdi-github-alt pl-1"></i>
                    </li>
                       </a> 
                     <a href="https://aaronsekisambu.herokuapp.com/">
                    <li className="mb-2 mr-4 google">
                      <i className="zmdi zmdi-google pl-1"></i>
                    </li>
                       </a> 
                     <a href="https://twitter.com/aaronsekisambu">
                    <li className="mb-2 mr-4 twitter">
                      <i className="zmdi zmdi-twitter pl-1"></i>
                    </li>
                       </a> 
                     <a href="https://www.linkedin.com/in/aaron-sekisambu-732b4a73/">
                    <li className="mb-2 mr-4 linkedIn">
                      <i className="zmdi zmdi-linkedin pl-1"></i>
                    </li>
                       </a> 
                  </ul>
                  </div>
      </Fragment>
    )
  }
};

export default SocialMediaIcons;