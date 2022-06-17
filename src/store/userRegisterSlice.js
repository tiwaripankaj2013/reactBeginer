

export const fetchUsers =  createAsyncThunk( 'user/post',async () => {
   const res  = await fetch('https://tasks-220c6-default-rtdb.europe-west1.firebasedatabase.app/usersRegister.json',
   {
      method:"POST",
      headers:{
         'Content-Type':'application/json',
      },
      body: JSON.stringify({
         
      })
   }
   );
   const data = await res.json();
   // console.log(data);
   return data;
});