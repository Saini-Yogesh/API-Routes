"use client";
import { useState, useEffect } from "react";
import "../../../addUser/styles.css";

const Update = ({ params }) => {
  const id = params.userId;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mail, setMail] = useState("");

  useEffect(() => {
    getUserDetail();
  }, []);

  const getUserDetail = async () => {
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    data = data.result[0];
    setName(data.name);
    setAge(data.age);
    setMail(data.mail);
  };
  const updateUserDetail = async () => {
    let data = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, age, mail }),
    });
    data = await data.json();
    if (data.success) alert("imformation updated ");
    else alert("try with valid input");
  };
  return (
    <div>
      <div className="add-user">
        <h1> Update User Details {id}</h1>
        <input
          type="text"
          className="input-field"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="input-field"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          className="input-field"
          placeholder="Enter mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <button className="btn" onClick={updateUserDetail}>
          Update detals
        </button>
      </div>
    </div>
  );
};

export default Update;
