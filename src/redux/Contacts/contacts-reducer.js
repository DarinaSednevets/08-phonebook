import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { filterContacts } from "./contacts-acions";
import { fetchContacts, addContact, deleteContact } from "./contacts-operations";

const initialFilter = "";

const items = createReducer([], {
    [fetchContacts.fulfilled]: (_, { payload }) => payload,
    [addContact.fulfilled]: (state, { payload }) => [...state, payload],
    [deleteContact.fulfilled]: (state, { payload }) => state.filter(contact => contact.id !== payload),
})


const filter = createReducer(initialFilter, {
    [filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
    items,
    filter,
})
