import { createSlice, Draft } from '@reduxjs/toolkit';
import { User } from '@/constants';

/**
 * Default state object with initial values.
 */

const initialState: any = {
  isLoading: true,
  hasError: false,
  data: {}
}

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserStart: (
      state: Draft<typeof initialState>,
      // action: PayloadAction<typeof initialState.id>
    ) => {
      state.isLoading = true;
    },
    fetchUserSuccess: (
      state: Draft<typeof initialState>,
      { payload }
    ) => {
      state.isLoading = false;
      state.data = payload;
      state.hasError = false;
    },
    fetchUserFailure: (
      state: Draft<typeof initialState>,
      { payload }
    ) => {
      state.isLoading = false;
      state.data = payload;
      state.hasError = true;
    }
  },
});

// A small helper of user state for `useSelector` function.
export const getUser = (state: { user: User }) => state.user;

// Exports all actions
export const { fetchUserStart, fetchUserFailure, fetchUserSuccess } = userSlice.actions;

export default userSlice.reducer;