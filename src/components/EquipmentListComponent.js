import React from 'react';

import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';



function RenderEquipmentItem ({equipment}) {
    

    return (
        <div>
        <img className="photoEquip" src={baseUrl+equipment.image} alt={equipment.name} />
        <h3 className="Equiptitle">{equipment.name}</h3>

     
        </div>           
               
      
    );
}
/*   <Slider
            defaultValue={20}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-custom"
            step={5}
            valueLabelDisplay="auto"
            marks={true}
        />*/

const EquipmentList = (props) => {

    const equipList = props.equipment.equipment.map((equip) => {
        
        return (
            
            <div className="col-12 col-md-5 m-1"  key={equip.id}>
                <RenderEquipmentItem equipment={equip} equipmentTypeId={equip.equipmentTypeId} />
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
                        <h3>EquipmentList</h3>
                        <hr/>
                    </div>                
                </div>
                <div className="row">
                    {equipList}
                </div>
            </div>
        );
    }
}

export default EquipmentList;