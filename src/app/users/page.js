import Link from "next/link";

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
        <Link href={`/users/${user.id}`}>
          <h1> {user.name}</h1>{" "}
        </Link>
      ))}
    </div>
  );
};

export default Users;
