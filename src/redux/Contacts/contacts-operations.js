import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://619684adaf46280017e7e138.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/contacts');
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, number }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/contacts', { name, number });
            return data;
        } catch (error) {
            rejectWithValue(error);
        }
    },
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, { rejectWithValue }) => {
        try {
            const { data } = await axios.delete(`/contacts/${contactId}`);
            return data.id;
        } catch (error) {
            rejectWithValue(error);
        }
    },
);