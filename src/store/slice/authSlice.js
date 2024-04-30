import { createSlice } from "@reduxjs/toolkit";
import { ROLES } from "../../routes/routes";

const initialState = {
  email: null,
  token: null,
  id: null,
  role: ROLES.GUEST,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.email = payload.email;
      state.token = payload.token;
      state.id = payload.id;
      state.isAuth = payload.isAuth;
      state.role = payload.role;
    },
    

    logout: (state, { payload }) => {
      state.email = null;
      state.token = null;
      state.id = null;
      state.role = ROLES.GUEST;

      payload.navigate("/");
    },
  },
});

export const { login, logout } = authSlice.actions;
