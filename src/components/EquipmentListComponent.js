import React from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl} from '../shared/baseUrl';


function RenderEquipmentItem ({equipment}) {
    return (
        <Card>
            <Link to={`/equipment/${equipment._id}`}>
            
                <CardImg width="100%" src={baseUrl + equipment.equipmentTypeId.imagePath} alt={equipment.name} />
                <CardImgOverlay>
                    <CardTitle>{equipment.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const RoomEquipmentList = (props) => {
    const equipmentList = props.equipment.map((equipment) => {
        return (
            <div className="col-12 col-md-5 m-1"  key={equipment._id}>
                <RenderEquipmentItem equipment={equipment} />
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
                        <h3>Equipment List</h3>
                        <hr/>
                    </div>                
                </div>
                <div className="row">
                    {equipmentList}
                </div>
            </div>
        );
    }
}

export default RoomEquipmentList;