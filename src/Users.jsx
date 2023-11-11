import { useEffect, useState } from "react";
import "./users.css";
import db from "./firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    onSnapshot(collection(db, "users"), (snapshot) =>
      setUsers(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div>
      <h2>users</h2>
      <table style={{ border: 1, borderColor: "black", borderWidth: 1 }}>
        <thead>
          <tr>
            <th>User</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
