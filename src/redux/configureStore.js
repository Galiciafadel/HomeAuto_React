import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Apartments } from './apartments';
import { Rooms } from './rooms';
import { RoomType } from './RoomType';
import { EquipmentType } from './EquipmentType';
import { ApartmentType } from './ApartmentType';
import { Equipment } from './Equipment';
import { Users } from './users';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            apartments: Apartments,
            rooms: Rooms,
            roomType: RoomType,
            equipmentType: EquipmentType,
            equipment:Equipment,
            apartmentType:ApartmentType,
            user:Users

        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}