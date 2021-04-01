import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


function RenderRooms({rooms}) {
    const rms = rooms.map((room) => { 
        return (
            <Card>
            <Link to={`/equipment`} >
                <CardImg width="100%" src={baseUrl + room.image} alt={room.name} />
                <CardImgOverlay>
                    <CardTitle>{room.name}</CardTitle>
                </CardImgOverlay>
            </Link>
            </Card>
        );        
    })

    if (rooms == null) {
        return <div></div>
    }
    else
    return (
        <div>
            <h3 className="slider">Rooms</h3>
                {rms}    
        </div>
    );
}

const RoomList = (props) => {
    const apartment = props.apartment

    console.log(apartment);
    
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.apartment != null) {
        return (
            <div className="container">
            {/* <div className="row">
                <div className="col-12">
                    <h3>{props.apartment.name}</h3>
                    <hr />
                </div>                
            </div> */}
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                <RenderRooms rooms={props.rooms}
                />
                </div>
            </div>
            </div>
        );
    }
}

export default RoomList;