import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  characters: []
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {}
});

export default characterSlice.reducer;
