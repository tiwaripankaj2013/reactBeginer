import React,{useEffect} from 'react';
import { fetchUsers } from '../../store/userSlice';
import { STATUSES } from '../../store/cartSlice';
import { useSelector,useDispatch } from 'react-redux';
import { CustomTable } from '../../components/ui/customTable';
export const Users = () => {
   const { data: users, status } = useSelector((state) => state.user);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(fetchUsers());
    }, []);
    if (status === STATUSES.LOADING) {
      return <h2>Loadin..</h2>;
    }
    if (status === STATUSES.ERROR) {
      return <h2>Something went wrong</h2>;
    }
    let color = 'red'
    console.log(users);
    const tableHeading = [
      {field:'id',title:'S.No'},
      {field:'name',title:'Name'},
      {field:'email',title:'Email'},
      {field:'phone',title:'Phone No.'},
    ]
    
  return (
    <CustomTable columns={tableHeading} tableData={users} />
  )
}
