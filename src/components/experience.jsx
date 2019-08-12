import React, {Fragment} from 'react';
import Card from './card';
import andelaLogo from '../assets/andelaLogo.png';
import recordRadio from '../assets/recordradio.jpeg';
import recordTv from '../assets/recordTv.jpeg';
import universalChurch from '../assets/universalChurch.png';
import uigtLogo from '../assets/uigtlogo.jpg';


export const workExperience = () => {
  const experience = {
    companyName: {
      one: 'Andela Uganda', 
      two: 'Andela Kigali',
      three:  'Record Radio', 
      four:  'Record TV Network',
      five:  'UIGT',
      six:  'Snow Uganda', 
      seven:  'Crane Media',
      eight:  'UMCAT',
      nine:  'Top TV',
      ten:  'TV Africa',
      eleven:  'Universal Church Studios',
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
    position: {
      one: " Creative Associate",
      two: "Software Engineer",
      three: "Brand Director",
      four: "Head of Information Technology",
      five: "Brand Manager",
      six: "Graphics Designer",
      seven: "Multimedia Lecturer",
    },
    current: 'to date',
  };
return (
  <Fragment>
  <Card
  image={andelaLogo}
  company={experience.companyName.one}
  subTitle={`${experience.years.two} - ${experience.years.one}`}
  position={experience.position.one}
  />


<Card 
  image={andelaLogo}
  company={experience.companyName.two}
  subTitle={`${experience.years.one} - ${experience.current}`}
  position={experience.position.two}
  />

<Card 
  image={recordRadio}
  company={experience.companyName.three}
  subTitle={`${experience.years.four} - ${experience.current}`}
  position={experience.position.two}
  />



<Card 
  image={recordTv}
  company={experience.companyName.four}
  subTitle={`${experience.years.five} - ${experience.years.two}`}
  position={experience.position.three}
  />


<Card 
  image={recordTv}
  company={experience.companyName.four}
  subTitle={`${experience.years.four} - ${experience.years.two}`}
  position={experience.position.four}
  />


<Card 
  image={universalChurch}
  company={experience.companyName.eleven}
  subTitle={`${experience.years.six} - ${experience.years.two}`}
  position={experience.position.five}
  />

<Card 
  image={universalChurch}
  company={experience.companyName.eleven}
  subTitle={`${experience.years.five} - ${experience.years.two}`}
  position={experience.position.six}
  />


<Card 
  image={uigtLogo}
  company={experience.companyName.five}
  subTitle={`${experience.years.four} - ${experience.years.nine}`}
  position={experience.position.seven}
  />
  </Fragment>
)
};