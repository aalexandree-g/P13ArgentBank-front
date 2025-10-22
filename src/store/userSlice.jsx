import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    profile: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    setProfile: (state, action) => {
      state.profile = action.payload
    },
    clearUser: (state) => {
      state.token = null
      state.profile = null
    },
  },
})

export const { setToken, setProfile, clearUser } = userSlice.actions

export default userSlice.reducer
