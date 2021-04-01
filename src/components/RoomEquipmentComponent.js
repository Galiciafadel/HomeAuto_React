import React from "react";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import MySwitch from './Switch';
 

function RenderRoomEquipment ({equipment}) {
    return (
    
        <div>
        <img className="imageclass" src={baseUrl + equipment.image} alt={equipment.name} />
        <h3 className="Labelclass">{equipment.name}</h3>
        <MySwitch/>
        
        
        </div>
        
    );
}

const EquipmentList = (props) => {

    const menu = props.equipment.equipment.map((equip) => {
        return (
            <div className="col-12 col-md-5 m-1"  key={equip.id}>
                <RenderRoomEquipment equipment={equip} />
            </div>
        );
    });

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
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}



export default EquipmentList;