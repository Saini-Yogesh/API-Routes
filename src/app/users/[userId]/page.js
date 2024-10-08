async function getuser(id) {
  let data = await fetch(`http://localhost:3000/api/users/${id}`);
  data = data.json();
  return data;
}

const page = async ({ params }) => {
  let user = await getuser(params.userId);
  user = user.result[0];
  return (
    <div>
      <h1> Hi {user.name}</h1>
      <br />
      <h1>Id: {user.id}</h1>
      <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
      <h1>Mail: {user.mail}</h1>
    </div>
  );
};

export default page;
