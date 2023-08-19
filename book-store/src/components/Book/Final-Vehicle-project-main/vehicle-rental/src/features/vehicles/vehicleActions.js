import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../backend';

// add product
export const addProduct = createAsyncThunk(
  'user/addProduct',
  async ({ formData, userInfo }, { rejectWithValue }) => {
    console.log('inside action:', formData, userInfo);
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo?.token}`,
        },
      };
      const { data } = await axios.post(
        `${API}/vehicles/${userInfo?._id}`,
        formData,
        config
      );
      return data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data.error);
    }
  }
);

// get all products
export const getAllProducts = createAsyncThunk(
  'user/getAllProducts',
  async ({ type }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const res = await axios.get(`${API}/vehicles?type=${type}`, config);
      return res.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data.error);
    }
  }
);

// get a products
export const getProduct = createAsyncThunk(
  'user/getProduct',
  async ({ id }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const res = await axios.get(`${API}/vehicles/${id}`, config);

      return res.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data.error);
    }
  }
);
