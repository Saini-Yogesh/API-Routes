"use client";
import React from "react";

const ButtonComponent = ({ id }) => {
  const deleteUser = async () => {
    let response = await fetch("http://localhost:3000/api/users/" + id, {
      method: "DELETE",
    });
    response = await response.json();
    if (response.success) alert("deleted");
    else alert("some error occured");
  };
  return (
    <div style={{ display: "inline-block", paddingLeft: "50px" }}>
      <button onClick={deleteUser}> Delete</button>
    </div>
  );
};

export default ButtonComponent;

/*

resonr for make this button saprately 
because we can't use async await in client component 
and for perform the event we have to make the component cilent
thats why we saprately make this button compinent

interview questoin -> 
        Q. can we directely apply async await on the client component
        Ans. NO
        Q. can we use diectly use events on the server component
        Ans. NO  if have to use then make a chield component then use
*/
