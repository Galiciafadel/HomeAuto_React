import React, { Component } from 'react';
import RoomList from './RoomsListComponent';
import EquipmentList from './RoomEquipmentComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchRooms, fetchEquipment, fetchApartments, fetchApartmentType,fetchEquipmentType,fetchUsers,fetchRoomType } from '../redux/ActionCreators';
import ApartmentList from './ApartmentListComponent';
import ApartmentsList from './ApartmentsList';
import LogIn from './LogIn';
import Admin from './AdminComponent';
import UsersList from './UsersList';
import UsersApartment from './UsersApartments';


const mapStateToProps = state => {
  return {
    rooms: state.rooms,
    equipment: state.equipment,
    apartments: state.apartments,
    users: state.user,
    apartmentType: state.apartmentType,
    roomType: state.roomType,
    equipmentType: state.equipmentType,


  }
}

const mapDispatchToProps = dispatch => ({
  /*postEquipment: (roomId, actual, turned) => dispatch(postEquipment(roomId, actual, turned)),*/
  fetchRooms: () => { dispatch(fetchRooms())},
  fetchEquipment: () => {dispatch(fetchEquipment())},
  fetchApartments: () => {dispatch(fetchApartments())},
  fetchUsers: () => {dispatch(fetchUsers())},
  fetchApartmentType: () => {dispatch(fetchApartmentType())}
});

class Main extends Component {

  componentDidMount() {
    this.props.fetchRooms();
    this.props.fetchEquipment();
    this.props.fetchApartments();
    this.props.fetchUsers();
    this.props.fetchApartmentType();

  }

  render() {
    

    const ApartmentWithId = ({match}) => {
      return(
          <RoomList apartment={this.props.apartments.apartments.filter((apartment) => apartment.id === parseInt(match.params.apartmentId,10))[0]}
          isLoading={this.props.apartments.isLoading}
          errMess={this.props.apartments.errMess}
          rooms={this.props.rooms.rooms.filter((room) => room.apartmentId ===  parseInt(match.params.apartmentId,10)) }
          roomErrMess={this.props.rooms.errMess}

        />
      );
    };

   const RoomWithId = ({match}) => {
      return(
          <EquipmentList room={this.props.rooms.rooms.filter((room) => room.id === parseInt(match.params.roomId,10))[0]}
          isLoading={this.props.rooms.isLoading}
          errMess={this.props.rooms.errMess}
          equipment={this.props.equipment.equipment.filter((equipment) => equipment.roomId === parseInt(match.params.roomId,10))}
          equipmentErrMess={this.props.equipment.errMess}
          
        />
      );
    };

      // const ApartmentRooms = ({match}) => {
      //   return(
      //       <ApartmentList room={this.props.rooms.rooms.filter((room) => room.id === parseInt(match.params.roomId,10))[0]}
      //       isLoading={this.props.rooms.isLoading}
      //       errMess={this.props.rooms.errMess}
      //       equipment={this.props.equipment.equipment.filter((equipment) => equipment.roomId === parseInt(match.params.roomId,10))}
      //       equipmentErrMess={this.props.equipment.errMess}
            
          
      
      //   const findImageById = id => {
      //     let image = props.apartmentTypes.filter(t => t._id === id);
      //     return image[0].imagePath;
      //   }
        
      //   const findImageByApartId = apartmentId => {
      //     let apart = props.apartments.apartments.filter(apartment => apartment._id === apartmentId);
      //     let apartType = apart[0].apartmentTypeId;
      //     return findImageById(apartType)
      //     };
      // };



    

    return (
      <div>
        
        <div>
          <Switch> 
          <Route exact path="/login" component={() => <LogIn></LogIn>}></Route> 
            <Route exact path="/" component={() => <LogIn></LogIn>}></Route>
            <Route exact path="/admin" component={() => <Admin></Admin>}></Route>
            <Route exact path='/apartments/:apartmentId' component={ApartmentWithId}/>
            <Route exact path='/apartments' component={()=> <ApartmentList apartments={this.props.apartments} ></ApartmentList>}></Route>
            <Route exact path="/admin/apartments" component={() => <ApartmentsList data={this.props.apartments.apartments}></ApartmentsList>}></Route>
            <Route exact path='/rooms/:roomId' component={RoomWithId}/>
            <Route exact path='/equipment' component={()=> <EquipmentList equipment={this.props.equipment}/>}/>
            <Route exact path="/users" component={() => <UsersList data={this.props.users.users} apartments={this.props.apartments.apartments}></UsersList>}></Route>
            <Route exact path='/usersApartment' component={()=> <UsersApartment  apartments={this.props.apartments.apartments} apartmentType={this.props.apartmentType.apartmentType}/>}/>
          </Switch>
        </div>
        
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));