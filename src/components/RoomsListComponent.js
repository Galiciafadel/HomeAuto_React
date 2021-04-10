import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


function RenderRooms({rooms}) {
    if (rooms!=null)
        return (
            <div className="slider">
                
                <div>
            {rooms.map((room)=>{
                
                return (
                   <p className="slider"> Byeee222</p> ,
                <div key={room._id}>
                    <Card>
                    <Link to={`/rooms/${room._id}`} >
                        <CardImg width="100%" src={baseUrl + room.roomTypeId.imagePath} alt={room.name} />
                        <CardImgOverlay>
                            <CardTitle>{room.name}</CardTitle>
                        </CardImgOverlay>
                    </Link>
                    </Card>
                
                </div>
                )
            })}
            </div>
        </div>
            
        ); 

    else {
        return <div>HELLOOO</div>;
    }       
}


// function RenderRooms({rooms}) {
//         return (
//             <Card>
//                 <Link to={`/equipment/`}>
                
//                     <CardImg width="100%" src={baseUrl + rooms.rooms[1].roomTypeId.imagePath} alt={rooms.name} />
//                     <CardImgOverlay>
//                         <CardTitle>{rooms.rooms[1].name}</CardTitle>
//                     </CardImgOverlay>
//                 </Link>
//             </Card>
//         );
//     }

const RoomList = (props) => {

    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else
    if (props.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.rooms.errMess}</h4>
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
                        <h3 className="slider">Rooms List</h3>
                        <hr/>
                    </div>                
                </div>
                <div className="row">
                    <RenderRooms rooms={props.rooms}></RenderRooms>
        
                </div>
            </div>
        );
    }
}
 
export default RoomList;