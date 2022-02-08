import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import userAPI from '../../API/userApi'

export const register = createAsyncThunk(
    'users/register',
    async (payload) => {
      const data = await userAPI.register(payload)
        //save to localstorage
     localStorage.setItem('access_token',data.jwt);
     localStorage.setItem('user',JSON.stringify(data.user))
    
      return data.user
    }
  )

const userSlice = createSlice({
    name : 'user',
    initialState : {
        current:{},
        settings: {},
    },
    reducers :{
        
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(register.fulfilled, (state, action) => {
          // Add user to the state array
          state.current = action.payload
        })
      },
})

export default userSlice.reducer
