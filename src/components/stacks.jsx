import React, {Fragment} from 'react';
import react from '../assets/react.jpeg';
import ruby from '../assets/ruby.png';
import rails from '../assets/rails.png';
import htmlCss from '../assets/HTML5CSS3Logos.svg';
import javascript from '../assets/javascript.svg';
import node from '../assets/node.jpeg';


export const SoftwareStacks = ({dropDown, title}) => {
  const educationSection = dropDown === true && title === 'sta' ? "education-section" : "education-section show-section";
return (
  <Fragment>
  <div className={educationSection}>
    <p>
    <span className="education-title"><span> <img src={react} alt=""/></span> React Js</span> <br />
    <span className="education-info">
      2 years
    </span>
    </p>

    <p>
    <span className="education-title"> <span> <img src={javascript} alt=""/></span> JavaScript</span> <br />
    <span className="education-info">
      1 year
    </span>
    </p>

    <p>
    <span className="education-title"> <span> <img src={rails} alt=""/></span> Ruby on Rails</span> <br />
    <span className="education-info">
      1 year
    </span>
    </p>

    <p>
    <span className="education-title"> <span> <img src={ruby} alt=""/></span> Ruby</span> <br />
    <span className="education-info">
      1 year
    </span>
    </p>

    <p>
    <span className="education-title"> <span> <img src={htmlCss} alt=""/></span> HTML/CSS</span> <br />
    <span className="education-info">
      3 year
    </span>
    </p>
    <p>
    <span className="education-title"> <span> <img src={node} alt=""/></span> Node js</span> <br />
    <span className="education-info">
      1 year
    </span>
    </p>
  </div> 
  </Fragment>
)
};