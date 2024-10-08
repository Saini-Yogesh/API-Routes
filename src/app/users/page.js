import Link from "next/link";
import ButtonComponent from "./ButtonComponent";

async function getusers() {
  let data = await fetch("http://localhost:3000/api/users");
  data = data.json();
  return data;
}

const Users = async () => {
  let users = await getusers();
  return (
    <div>
      <h1> Users List</h1>
      <br />
      {users.map((user) => (
        <div>
          <Link href={`/users/${user.id}`}>
            <span
              style={{
                display: "inline-block",
                width: "180px",
                padding: "5px",
              }}
            >
              {user.name}
            </span>
          </Link>
          <Link href={`/users/${user.id}/update`}>
            <span>Edit</span>
          </Link>
          <ButtonComponent id={user.id} />
        </div>
      ))}
    </div>
  );
};

export default Users;
