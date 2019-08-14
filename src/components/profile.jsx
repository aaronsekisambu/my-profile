import React, {Fragment, Component} from 'react';
import SocialMediaIcons from './socialMediaIcons';
import BriefInformation from './briefInformation';
import profileImage from '../assets/aaron1bw.jpg'
import {WorkExperience} from './experience';
import { Education } from './education';
import { SoftwareStacks } from './stacks';

class Profile extends Component {
    state = { 
      dropdown: false,
      dropdownTwo: false
  }

showDropdown = (e) => {
  this.setState({
    dropdown: true,
    value: e.target.getAttribute('value')
  })
}

hideDropdown = () => {
  this.setState({
    dropdown: false,
   })
}

  render() { 
    return ( 
      <Fragment>
        <main>
          <section className="col col-12 new-main-container">
            <div className="design-container">
              <div className="design shadow border rounded-lg">

                <div className="side-left">
                  <div>
                    <BriefInformation />
                  </div >
                </div>
                <div className="side-right">
                  <div className="details-menu">
                    <ul className="details-list">
                      <li 
                      value="edu"
                      onMouseEnter={(e)=> this.showDropdown(e)} 
                      onMouseLeave={() => this.hideDropdown()}>
                        Education <i className="zmdi zmdi-chevron-down"></i>
                        <Education  dropDown={this.state.dropdown}
                        title={this.state.value}
                        compareTitle="education"/>
                      </li>
                      <li
                      value="exp"
                      onMouseEnter={(e)=> this.showDropdown(e)} 
                      onMouseLeave={() => this.hideDropdown()}>
                        Experience <i className="zmdi zmdi-chevron-down"></i>
                        <WorkExperience 
                        dropDown={this.state.dropdown}
                        title={this.state.value}
                        />
                        </li>
                      <li
                      value="sta"
                      onMouseEnter={(e)=> this.showDropdown(e)} 
                      onMouseLeave={() => this.hideDropdown()}>
                        Stacks <i className="zmdi zmdi-chevron-down"></i>
                        <SoftwareStacks 
                        dropDown={this.state.dropdown}
                        title={this.state.value}/>
                        </li>
                      <li
                      
                      onMouseEnter={(e)=> this.showDropdown(e)} 
                      onMouseLeave={() => this.hideDropdown()}>
                        Projects <i className="zmdi zmdi-chevron-down"></i></li>
                      <li
                      
                      onMouseEnter={(e)=> this.showDropdown(e)} 
                      onMouseLeave={() => this.hideDropdown()}>
                        UI/UX <i className="zmdi zmdi-chevron-down"></i> </li>
                    </ul>
                  </div>
                  <div className="profile-image">
                    <div className="my-image">
                      <img src={profileImage} alt=""/>
                    </div>
                  </div>
                  <div className="social-icons-section">
                    <SocialMediaIcons />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Fragment>
     );
  }
}
 
export default Profile;