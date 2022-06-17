const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

// object.freeze you cant changes this object
export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const userSlice = createSlice({
   name: 'user',
   initialState: {
       data: [],
       status: STATUSES.IDLE,
   },
   reducers: {
   },
   extraReducers:(builder) =>{
      builder
      .addCase(fetchUsers.pending,(state) =>{
         state.status = STATUSES.LOADING;
      })
      .addCase(fetchUsers.fulfilled,(state,action) =>{
         state.data = action.payload;
         state.status = STATUSES.IDLE;
      })
      .addCase(fetchUsers.rejected,(state) =>{
         state.status = STATUSES.ERROR;
      })
   },

});

export const { setUsers, setStatus } = userSlice.actions;
export default userSlice.reducer; 

export const fetchUsers =  createAsyncThunk( 'user/fetch',async () => {
   const res  = await fetch('https://tasks-220c6-default-rtdb.europe-west1.firebasedatabase.app/usersRegister.json');
   const data = await res.json();
   // console.log(data);
   return data;
});