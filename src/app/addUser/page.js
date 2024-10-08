"use client";
import { useState } from "react";
import "./styles.css";

const AddUsesr = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mail, setMail] = useState("");
  const addUser = async () => {
    let data = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({ name, age, mail }),
    });
    data = await data.json();
    if (data.success) alert("user created");
    else alert("some error occured");
  };
  return (
    <div>
      <h1> Add User</h1>
      <div className="add-user">
        <lable className="input-field">Name</lable>
        <input
          type="text"
          value={name}
          placeHolder="enter name"
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        <lable className="input-field">Age</lable>
        <input
          type="number"
          value={age}
          placeHolder="enter age"
          onChange={(e) => setAge(e.target.value)}
          className="input-field"
        />
        <lable className="input-field">Mail</lable>
        <input
          type="mail"
          value={mail}
          placeHolder="enter mail"
          onChange={(e) => setMail(e.target.value)}
          className="input-field"
        />
        <button className="btn" onClick={addUser}>
          Add User
        </button>
      </div>
    </div>
  );
};

export default AddUsesr;
