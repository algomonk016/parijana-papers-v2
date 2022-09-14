import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '@/redux/store';
import { getUser } from '@/service/user.service';
import { getStorageData, setStorageData } from '@/utils';

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
  async () => {
    const user = await getUser();
    setStorageData('user', 'session', user);
    return user;
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
      })
      .addCase(fetchUserDetails.rejected, (state) => {
        state.status = 'failed';
      })
  },
})

// export const {  } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.data;

export default userSlice.reducer;