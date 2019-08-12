import React, {Fragment, Component} from 'react';
import Slider from '@material-ui/core/Slider';

class Heading extends Component {
  state = 0;
  
  componentDidUpdate() {
    if (this.state){
      const anUpdate = this.state.value;
      return anUpdate
    }
    return null;
  }
  opacityChange = () => {
    const opacity = [
      {
        value: 0,
        label: '0',
      },
      {
        value: 0.3,
        label: '0.2',
      },
      {
        value: 0.5,
        label: '0.5',
      },
      {
        value: 1,
        label: '1',
      },
    ];
    return opacity;
};


stepChange = (e, value) => {
this.setState({
  value
})
  return value;
};


  render () {
    return (

    <Fragment>
      <section style={{ opacity: `${this.state.value}` }}> 
        <Slider
        defaultValue={0.2}
        step={0.1}
        valueLabelDisplay="auto"
        marks={this.opacityChange()}
        min={0}
        max={1}
        onChange={this.stepChange}
        />
      </section>
        </Fragment>
    )

  }
};

export default Heading;
