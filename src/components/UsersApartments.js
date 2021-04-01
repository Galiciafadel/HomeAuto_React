import React, { useEffect, useState } from 'react'
//import ApartmentCard from './ApartmentCard';
//import { makeStyles } from '@material-ui/core/styles';
//import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
import { Card, CardImg, CardImgOverlay,CardTitle} from 'reactstrap';
import { Link} from 'react-router-dom';


 
function ApartmentCard(props) {
   return (
        <Link to={`/apartments/${props.apartmentId}`} >
            <Card>
                
                <CardImg width="100%" src={props.apartmentImage} alt={props.apartmentName} />
                <CardImgOverlay>
                    <CardTitle>{props.apartmentName}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
   )
}
function UsersApartment(props) {

    const [userId, setUserId] = useState();

    useEffect(() => {
        setUserId(localStorage.getItem('userId'));
    });
    
    const findImageById = id => {
        let image = props.apartmentType.filter(t => t._id === id);
        return image[0].imagePath;
    }
      
    const findImageByApartId = apartmentId => {
      let apart = props.apartments.filter(apartment => apartment._id === apartmentId);
      let apartType = apart[0].apartmentTypeId;
      return findImageById(apartType)
    }

    const filterApartmentsByUserId = userId => {
        return props.apartments.filter(apartment => apartment.users.includes(userId));
    }
      

    return (
        <div>
            {filterApartmentsByUserId(userId).map(apartment => {
                return <ApartmentCard apartmentId={apartment._id} apartmentName={apartment.name} apartmentImage={findImageByApartId(apartment._id)}></ApartmentCard>
            })}
            
        </div>
    )
}

export default UsersApartment;