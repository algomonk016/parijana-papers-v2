import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '@/redux/store';
import { getUser } from '@/service/user.service';

export interface UserState {
  data: any;
  status: 'idle' | 'failed' | 'loading';
}

const initialState: UserState = {
  data: {},
  status: 'idle',
}

export const fetchUserDetails = createAsyncThunk(
  'user/fetchDetails',
  async (id:number) => {
    const response = await getUser(id);
    return response;
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
        console.log('action', action.payload)
      })
      .addCase(fetchUserDetails.rejected, (state) => {
        state.status = 'failed';
      })
  },
})

// export const {  } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.data;

export default userSlice.reducer;