import React, {Fragment} from 'react';
import artfield from '../assets/artfield.png';
import bugema from '../assets/bugema.jpg';


export const Education = ({dropDown, title}) => {
  const educationSection = dropDown === true && title === 'edu' ? "education-section" : "education-section show-section";
return (
  <Fragment>
  <div className={educationSection}>
    <p>
    <span className="education-title"><span> <img src={bugema} alt=""/></span> Bugema University</span> <br />
    <span className="education-info">
    Bachelor's Degree in Software Engineering and App Development
    2018 - 2019
    </span>
    </p>

    <p>
    <span className="education-title"> <span> <img src={artfield} alt=""/></span> Artfield Institute of Design</span> <br />
    <span className="education-info">
    Diploma in 3D Animation and Digital Media
    2012 - 2014
    </span>
    </p>
  </div> 
  </Fragment>
)
};