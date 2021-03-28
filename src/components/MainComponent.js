import React, { Component } from 'react';

import RoomList from './RoomsListComponent';
import RoomEquipmentDetail from './RoomEquipmentComponent';


import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchRooms, fetchEquipment, fetchApartments, fetchApartmentType,fetchEquipmentType,fetchUsers,fetchRoomType } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import ApartmentList from './ApartmentListComponent';
import LogIn from './LogIn';
import Admin from './AdminComponent';




const mapStateToProps = state => {
  return {
    rooms: state.rooms,
    equipment: state.equipment,
    apartments: state.apartments,
    users:state.users

  }
}

const mapDispatchToProps = dispatch => ({
  /*postEquipment: (roomId, actual, turned) => dispatch(postEquipment(roomId, actual, turned)),*/
  fetchRooms: () => { dispatch(fetchRooms())},
  fetchEquipment: () => {dispatch(fetchEquipment())},
  fetchApartments: () => {dispatch(fetchApartments())},
  fetchUsers: () => {dispatch(fetchUsers())},
});

class Main extends Component {

  componentDidMount() {
    this.props.fetchRooms();
    this.props.fetchEquipment();
    this.props.fetchApartments();

  }

  render() {
    /*const HomePage = () => {
      return(
        <Home 
        dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishErrMess={this.props.dishes.errMess}
        promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
        promoLoading={this.props.promotions.isLoading}
        promoErrMess={this.props.promotions.errMess}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }*/

    const ApartmentWithId = ({match}) => {
      return(
          <RoomList apartment={this.props.apartments.apartments.filter((apartment) => apartment.id === parseInt(match.params.apartmentId,10))[0]}
          isLoading={this.props.apartments.isLoading}
          errMess={this.props.apartments.errMess}
          //rooms={this.props.rooms.rooms.filter((room) => room.id === this.props.apartment.rooms.array.forEach(element => {
          //  return element.roomId}))}
          rooms={this.props.rooms.rooms.filter((room) => room.apartmentId ===  parseInt(match.params.apartmentId,10)) }
          roomErrMess={this.props.rooms.errMess}

          //rooms={this.props.rooms.rooms.filter((room) => room.id=== (this.props.apartments.apartments.filter((apartment) => apartment.id === parseInt(match.params.apartmentId,10))[0]).rooms.array.forEach(element => {
          //  return element.roomId}))
          //}

          /*(function(){
            for(var roomId: this.props.apartment.rooms){
              return roomId
            });
          )}
          apartmentRooms={this.props.apartments.apartments.filter(
            (apartment) => apartment.id === parseInt(match.params.apartmentId,10))[0].filter((room) => room.roomId=== function(){
              for var roomId in apartment.rooms{
                return roomId
              };
            })
            }*/
        />
      );
    };

   const RoomWithId = ({match}) => {
      return(
          <RoomEquipmentDetail room={this.props.rooms.rooms.filter((room) => room.id === parseInt(match.params.roomId,10))[0]}
          isLoading={this.props.rooms.isLoading}
          errMess={this.props.rooms.errMess}
          equipment={this.props.equipment.equipment.filter((equipment) => equipment.roomId === parseInt(match.params.roomId,10))}
          equipmentErrMess={this.props.equipement.errMess}
          
        />
      );
    };

    

    return (
      <div>
        
        <div>
          <Switch>  
            <Route exact path="/" component={() => <LogIn></LogIn>}></Route>
            <Route exact path="/admin" component={() => <Admin></Admin>}></Route>
            <Route exact path='/apartments/:apartmentId' component={ApartmentWithId}/>
            <Route exact path='/apartments' component={()=> <ApartmentList apartments={this.props.apartments}/>}/>
            <Route exact path='/rooms/:roomId' component={RoomWithId}/>
             
          </Switch>
        </div>
        
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
