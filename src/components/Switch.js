import React, {Component,/* useState*/} from 'react';
//import {render} from 'react-dom';
import Switch from 'react-switch';
import {makeStyles,Typography, Slider} from '@material-ui/core';

const useStyles= makeStyles({
  root: {
    width:200

  }
})
 

function MySlider () {

  const classes=useStyles()
  const [value,setValue]=React.useState(0)
  const handleSliderChange=(event,newValue)=>(
    setValue(newValue)
  )
  return(
    <div className={classes.roo}>
    <div style={{width:200,margin:20}}>
              <Slider
              min={0}
              max={50}
              value={value}
              onChange={handleSliderChange}
              />
              <Typography className="slider">Intensity: {value}</Typography>
              </div>
              </div>
  );
}


 
class MySwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
    this.handleChange=this.handleChange.bind(this);
    
    //this.turnedOn=this.turnOn.bind(this);
  }
  handleChange(checked){
      this.setState({checked})
  }

  handleSliderChange=(value)=>{
    alert(value);
  }

  
  render() {
    return (
        <div>
            <Switch
                className="react-switch"
                onChange={this.handleChange}
                checked={this.state.checked}
            />
            <p className="Labelclass">the {this.name} is <b>{this.state.checked ? 'on' : 'off'}</b> !</p>
              <MySlider/>
        </div>
    );
  }
}
 
export default MySwitch;