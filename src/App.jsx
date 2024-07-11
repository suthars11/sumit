import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./component/Login";
import Profile from "./component/Profile";

const App = () => {
  return (
    <>
      <UserContextProvider>
        <h1>hello everyone learn for useContext</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
};

export default App;
