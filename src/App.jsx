import { useEffect, useState } from "react";
import db from "./firebaseConfig";
import "./styles.css";
import Users from "./Users";
import { collection, onSnapshot} from "firebase/firestore";
import Food from "./Food";

const Dot = ({ color }) => {
  const circle = {
    height: 25,
    width: 25,
    margin: "0px 10px",
    borderRadius: "50%",
    backgroundColor: color,
    display: "inline-block",
  };

  return <span style={circle}></span>;
};

const App = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "colors"), (snapshot) =>
      setColors(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="main-container">
      <h2 className="title">color pallete with firebase</h2>
      <button className="btn">new</button>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>
            <a href="#">edit</a>
            <Dot color={color.value} />
            {color.name}
          </li>
        ))}
      </ul>
      <Users />
      <Food />
    </div>
  );
};

export default App;
