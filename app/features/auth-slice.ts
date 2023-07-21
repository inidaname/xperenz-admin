import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IAuthSlice = { user: null, token: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<IAuthSlice>) => {
      const { user, token: accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export const selectCurrentUser = (state: { auth: { user: string } }) => {
  state.auth.user;
};

export const selectCurrentToken = (state: { auth: { token: string } }) => {
  state.auth.token;
};

export default authSlice.reducer;
