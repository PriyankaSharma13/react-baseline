import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = UserSlice.actions;

export default UserSlice.reducer;