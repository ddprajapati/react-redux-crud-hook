import React from "react";

import ListUsers from "./components/ListUsers";
import NavBar from "./components/NavBar";
import AddUser from "./components/AddUser";
import FormDialog from "./components/FormDialog";
import EditFormDialog from "./components/EditFormDialog";

const App = () => (
  <div>
    <NavBar />
    <ListUsers />
    <AddUser />
    <FormDialog />
    <EditFormDialog />
  </div>
);

export default App;
