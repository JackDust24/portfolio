import History from "../pages/History";
import Profile from "../pages/Profile";
import React from "react";

function Test(props) {
  const { name } = props;

  return (
    <>
      {name === "Profile" && <Profile />}
      {name === "History" && <History />}

      {name !== "Profile" && name !== "History" && (
        <div>
          <h1>Hello World</h1>
        </div>
      )}
    </>
  );
}

export default Test;
