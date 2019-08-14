import React, {Fragment} from 'react';
import andelaLogo from '../assets/andelaLogo.png';
import recordRadio from '../assets/recordradio.jpeg';
import recordTv from '../assets/recordTv.jpeg';
import universalChurch from '../assets/universalChurch.png';
import uigtLogo from '../assets/uigtlogo.jpg';


export const WorkExperience = ({dropDown, title}) => {
  const experienceSection = dropDown === true && title === 'exp' ? "education-section" : "education-section show-section";
return (
  <Fragment>
  <div className={experienceSection}>
    
    <div className="title-separator-one title-separator"> 
       <span className="education-title"><span> <img src={andelaLogo} alt=""/></span> Andela</span> <br />
    <span className="education-info">
      <div className="current-role"> Software Engineer</div>
      <div className="border-line"></div>
      <div className="separator">
      <i className="zmdi zmdi-dot-circle"></i>
      </div>
      <div className="most-recent-role"> Creative Associate</div>
    </span> 

    </div> <br />

 <div className="title-separator title-separator"> 
    <span className="education-title"> <span> <img src={recordTv} alt=""/></span> Record TV Network</span> <br />
    <span className="education-info">
      <div className="current-role"> Web Developer</div>
      <div className="border-line"></div>
      <div className="separator">
      <i className="zmdi zmdi-dot-circle"></i>
      </div>

      <div className="most-recent-role"> UI/UX Designer</div>
      <div className="border-line"></div>
      <div className="separator">
      <i className="zmdi zmdi-dot-circle"></i>
      </div>
      <div className="most-recent-role"> Head of IT</div>
      <div className="border-line"></div>
      <div className="separator">
      <i className="zmdi zmdi-dot-circle"></i>
      </div>
    </span> 
    
    </div>
    <br />

    <div className="title-separator title-separator"> 
      <span className="education-title"> <span> <img src={recordRadio} alt=""/></span> Record Radio</span> <br />
    <span className="education-info">
      <div className="current-role"> Software Developer</div>
    </span> <br />
  </div>


  <div className="title-separator title-separator"> 
    <span className="education-title"> <span> <img src={uigtLogo} alt=""/></span> UIGT</span> <br />
    <span className="education-info">
      <div className="current-role"> Multimedia Lecturer</div>
    </span> <br />
  </div>


  <div className="title-separator title-separator"> 
      <span className="education-title"> <span> <img src={universalChurch} alt=""/></span> Universal Church</span> <br />
    <span className="education-info">
      <div className="current-role"> Graphics Designer</div>
      <div className="border-line"></div>
      <div className="separator">
      <i className="zmdi zmdi-dot-circle"></i>
      </div>

      <div className="most-recent-role">Brand Manager</div>
      <div className="border-line"></div>
      <div className="separator">
      <i className="zmdi zmdi-dot-circle"></i>
      </div>
      <div className="most-recent-role"> Motion Graphics</div>
      <div className="border-line"></div>
      <div className="separator">
      <i className="zmdi zmdi-dot-circle"></i>
      </div>
      <div className="most-recent-role"> Video Editor</div>

    </span>
    </div> <br />


  </div> 
  </Fragment>
)
};