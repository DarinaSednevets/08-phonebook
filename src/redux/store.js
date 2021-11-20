import { configureStore } from '@reduxjs/toolkit';
import contactsReducers from './Contacts/contacts-reducer';

const store = configureStore({
    reducer: {
        contacts: contactsReducers,
    }

});
export default store;

