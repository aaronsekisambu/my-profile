import React, {Fragment} from 'react';
import Card from './card';
import react from '../assets/react.jpeg';
import ruby from '../assets/ruby.png';
import rails from '../assets/rails.png';
import htmlCss from '../assets/HTML5CSS3Logos.svg';
import javascript from '../assets/javascript.svg';
import node from '../assets/node.jpeg';


export const softwareStacks = () => {
  const stacks = {
    level: {
        one: 'Expert', 
        two: 'Proficient',
        three: 'Beginner',
        four: 'Novice',
      },
    years: {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 0,
    },
    stack: {
      one: " JavaScript",
      two: "React and Redux",
      three: "Ruby",
      four: "Ruby on Rails",
      five: "HTML5 and CSS3",
      six: "Node",
    },
};
return (
  <Fragment>
  <Card
  image={javascript}
  company={stacks.stack.one}
  subTitle={`${stacks.years.one} - ${stacks.years.two} years`}
  position={stacks.level.two}
  />


<Card 
  image={react}
  company={stacks.stack.two}
  subTitle={`${stacks.years.six} - ${stacks.years.one} year`}
  position={stacks.level.two}
  />

<Card 
  image={htmlCss}
  company={stacks.stack.five}
  subTitle={`${stacks.years.three} years`}
  position={stacks.level.two}
  />


<Card 
  image={ruby}
  company={stacks.stack.three}
  subTitle={`${stacks.years.six} - ${stacks.years.one} year`}
  position={stacks.level.three}
  />

<Card 
  image={rails}
  company={stacks.stack.four}
  subTitle={`${stacks.years.six} - ${stacks.years.one} year`}
  position={stacks.level.three}
  />


<Card 
  image={node}
  company={stacks.stack.six}
  subTitle={`${stacks.years.six} - ${stacks.years.one} year`}
  position={stacks.level.two}
  />


  </Fragment>
)
};