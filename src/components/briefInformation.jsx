import React, {Component, Fragment} from 'react';

class BriefInformation extends Component {
  render() {
    return (
      <Fragment>
      <h2 className="text-white-50"> Hello, I'm  <span className="text-light">Aaron Sekisambu</span></h2>
      <h4 className="text-white-50 lead mt-4">Full stack <span className="text-light">Javascript Developer</span>  - UI/UX Design </h4>
      <div className="mt-4"> 
      <h3 className="text-light font-weight-bold pb-4">Web Development Specialist (5 years of JavaScript)</h3>
      <div className="background-text shadow">
      <p className="text-justify text-white">
      I have a Bachelors Degree in Software Engineering and Application Development, with 3 years of front end development in React and 2 years of the backend on node js with express and Postgres.

I am a full-stack JavaScript Developer (PERN). I also have a diploma in 3D Animation and Digital media specializing in UI/UX design with over 6 years in developing intuitive UX.

My wide range of product development includes Single page application in Web development, web re-designing, blogs, simple or complex responsive UI's.

I am proficient in JavaScript language with React, Node, and Express. I am also efficient in Ruby and Ruby on Rails with CoffeeScript
      </p>
      </div>
      
       </div>
      </Fragment>
    )
  }
}

export default BriefInformation;