import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import StorageKeys from 'constants/storage-keys';
import userAPI from '../../API/userApi'

export const register = createAsyncThunk(
    'users/register',
    async (payload) => {
      const data = await userAPI.register(payload)
        //save to localstorage
     localStorage.setItem(StorageKeys.TOKEN,data.jwt);
     localStorage.setItem(StorageKeys.USER,JSON.stringify(data.user))
    
      return data.user
    }
  )

export const login = createAsyncThunk(
    'users/login',
    async (payload) => {
      const data = await userAPI.login(payload)
        //save to localstorage
     localStorage.setItem(StorageKeys.TOKEN,data.jwt);
     localStorage.setItem(StorageKeys.USER,JSON.stringify(data.user))
    
      return data.user
    }
  )

const userSlice = createSlice({
    name : 'user',
    initialState : {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        settings: {},
    },
    reducers :{
        logout(state){
          //clear localstorage
          localStorage.removeItem(StorageKeys.TOKEN)
          localStorage.removeItem(StorageKeys.USER)

          //clear redux state
          state.current = {}
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(register.fulfilled, (state, action) => {
          // Add user to the state array
          state.current = action.payload
        })
        builder.addCase(login.fulfilled, (state, action) => {
          // Add user to the state array
          state.current = action.payload
        })
      },
})

export const { logout } = userSlice.actions
export default userSlice.reducer
