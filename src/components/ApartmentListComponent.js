import React from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl} from '../shared/baseUrl';


function RenderApartmentsItem ({apartment}) {
    return (
        <Card>
            <Link to={`/apartments/${apartment._id}`}>
            
                <CardImg width="100%" src={baseUrl + apartment.apartmentTypeId.imagePath} alt={apartment.name} />
                <CardImgOverlay>
                    <CardTitle>{apartment.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const ApartmentList = (props) => {
    const apartmentList = props.apartments.apartments.map((apartment) => {
        return (
            <div className="col-12 col-md-5 m-1"  key={apartment._id}>
                <RenderApartmentsItem apartment={apartment} />
            </div>
        );
        
    });

    if (props.apartments.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.apartments.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.apartments.errMess}</h4>
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
                        <h3>ApartmentList</h3>
                        <hr/>
                    </div>                
                </div>
                <div className="row">
                    {apartmentList}
                </div>
            </div>
        );
    }
}

export default ApartmentList;