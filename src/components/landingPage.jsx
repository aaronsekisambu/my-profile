import React, {Component, Fragment} from 'react';
import BriefInformation from './briefInformation';
import SocialMediaIcons from './socialMediaIcons';
import Modals from './modal';
import {workExperience} from './experience';
import { education } from './education';
import { softwareStacks } from './stacks';


class LandingPage extends Component {
    state = {
      show: false,
    }

  showModal = (e) => {
    this.setState({ show: true, value: e.target.value})
  }
  hideModal = () => {
    this.setState({ show: false })
  }

insertDetails = () => {
  const {value} = this.state;

  switch (value) {
    case "Social Media":
      return <SocialMediaIcons />
    case "Experience":
      return workExperience();
    case "Education":
      return education();
    case "Stacks":
      return softwareStacks();

    default:
     return  "For more information email me at aaron.sekisambu@gmail.com";
  }

}


  render() {
    return (
      <Fragment>
        {/* <Heading /> */}
        {/* <Card /> */}
        <div id="home" className="cover-banner d-flex">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-lg-8 information">
                      <div className=" mt-sm-5">
                      <BriefInformation />
                      <div className="mt-4 mb-4">
                      <button className="btn btn-success my-btn" value="Hire Me" onClick={e => this.showModal(e, "value")}>Hire Me </button>
                      <button href="#" className="btn btn-info my-btn" value="Experience" onClick={e => this.showModal(e, "value")} >Experience</button>
                      <button href="#" className="btn btn-danger my-btn" value="Education" onClick={e => this.showModal(e, "value")}>Education</button>
                      <button href="#" className="btn btn-warning my-btn" value="Projects" onClick={e => this.showModal(e, "value")}>Projects</button>
                      <button href="#" className="btn btn-primary my-btn" value="Stacks" onClick={e => this.showModal(e, "value")}>Stacks</button>
                      <button href="#" className="btn btn-secondary my-btn" value="Social Media" onClick={e => this.showModal(e, "value")}>Social Media</button>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
      <Modals 
      show={this.state.show} 
      handleClose={this.hideModal} 
      title={this.state.value}
      details={this.insertDetails()}
      />
          </div>
      </Fragment>
    )
  }
};


export default LandingPage;