import { useEffect, useState } from "react";

function APIDemo() {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  useEffect(() => {
    async function getdata() {
      setLoading(true);
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
        let data = await res.json();
        setUsers(data);
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false);
      }
    }

    getdata();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1 className="text-5xl text-center pt-50 text-red-500">{error.message}</h1>;

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default APIDemo;