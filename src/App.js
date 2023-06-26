import React from "react";
import UserList from "./components/UserList";
import AddUserForm from "./components/AddUserForm";
import { connect } from "react-redux";

const App = ({ users }) => {
  return (
    <div>
      <UserList users={users} />
      <AddUserForm />
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("app state", state);
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(App);
