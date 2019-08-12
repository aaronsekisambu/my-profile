import React, {Fragment} from 'react';
import Card from './card';
import artfield from '../assets/artfield.png';
import bugema from '../assets/bugema.jpg';


export const education = () => {
  const education = {
    universityName: {
        one: 'Bugema University', 
        two: 'Artfield Institute of Design',
      },
    years: {
      one: 2019,
      two: 2018,
      three: 2015,
      four: 2014,
      five: 2013,
      six: 2012,
      seven: 2009,
      eight: 1998,
      nine: 2016
    },
    study: {
      one: " Bachelor's Degree in Software Engineering and App Development",
      two: "Diploma in 3D Animation and Digital Media",
    },
};
return (
  <Fragment>
  <Card
  image={bugema}
  company={education.universityName.one}
  subTitle={`${education.years.two} - ${education.years.one}`}
  position={education.study.one}
  />


<Card 
  image={artfield}
  company={education.universityName.two}
  subTitle={`${education.years.six} - ${education.years.four}`}
  position={education.study.two}
  />


  </Fragment>
)
};