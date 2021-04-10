import React, {Component,/* useState*/} from 'react';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
//import MySwitch from './Switch';
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
      this.state = ({
        checked: false,
        value: 0
      })
      this.checked=this.turnOn.bind(this);
      
      //this.turnedOn=this.turnOn.bind(this);
    }
    turnOn(data){
        this.setState({checked:data});
        this.props.putEquipment(this.props.equipmentId, data,0)
    }
  
    handleSliderChange=(value)=>{
      alert(value);
      this.props.putEquipment(this.props.equipmentId, false,value)

    }
  
    
    render() {
      return (
          <div>
              <Switch
                  className="react-switch"
                  onChange={(data)=>this.turnOn(data)}
                  checked={this.state.checked}
              />
              <p className="Labelclass">the {this.name} is <b>{this.state.checked ? 'on' : 'off'}</b> !</p>
                <MySlider/>
          </div>
      );
    }
  }

function RenderRoomEquipment ({equipment,putEquipment}) {
    return (
    
        <div>
       {// <img className="imageclass" src={baseUrl + equipment.equipmentTypeId.imagePath} alt={equipment.name} />}
}
        <h3 className="Labelclass">{equipment.name}</h3>
        <MySwitch equipment={equipment} putEquipment={putEquipment}></MySwitch>
        
        
        </div>
        
    );
}

const EquipmentList = (props) => {

    if (props.equipment.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.equipment.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.equipment.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="slider">Equipment</h1>
                        <hr />
                    </div>                
                </div>
                <div className="col-12 col-md-5 m-1"  key={props.equipment._id}>
                <RenderRoomEquipment equipment={props.equipment} />
                </div>
            </div>
        );
    }
}

// const EquipmmentList = (props) => {
//     const apartmentList = props.apartments.apartments.map((apartment) => {
//         return (
//             <div className="col-12 col-md-5 m-1"  key={apartment._id}>
//                 <RenderApartmentsItem apartment={apartment} />
//             </div>
//         );
        
//     });

//     if (props.apartments.isLoading) {
//         return(
//             <div className="container">
//                 <div className="row">            
//                     <Loading />
//                 </div>
//             </div>
//         );
//     }
//     else if (props.apartments.errMess) {
//         return(
//             <div className="container">
//                 <div className="row"> 
//                     <div className="col-12">
//                         <h4>{props.apartments.errMess}</h4>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
//     else {
//         return (
//             <div className="container">
//                 <div className="row">

//                     <div className="col-12">
//                         <h3>ApartmentList</h3>
//                         <hr/>
//                     </div>                
//                 </div>
//                 <div className="row">
//                     {apartmentList}
//                 </div>
//             </div>
//         );
//     }
// }



export default EquipmentList;