import React, { useEffect } from "react";
import { fetchUsers, STATUSES } from "../../store/usersListSlice";
import { useSelector, useDispatch } from "react-redux";
import { CustomTable } from "../../components/ui/customTable";

const UsersList = () => {
  const { data: users, status } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  if (status === STATUSES.LOADING) {
    return <h2>Loading..</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong</h2>;
  }
  for(const user in users){
  console.log(user);
  }
  const tableHeading = [
    { field: "fname", title: "First Name" },
    { field: "lname", title: "Last Name" },
    { field: "email", title: "Email" },
    { field: "mobile", title: "Mobile" },
  ];
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
      {/* {
        users.array.forEach((element) => {
          <tr>
            <td>{element.fName}</td>
            <td>{element.lName}</td>
            <td>{element.email}</td>
            <td>{element.mobile}</td>
          </tr>
        })
        }; */}
      </tbody>
    </table>
  );
};

export default UsersList;
