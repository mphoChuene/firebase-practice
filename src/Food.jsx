import React, { useEffect, useState } from "react";
import db from "./firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

const Food = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "food"), (snapshot) =>
      setProducts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div>
      <h2>food menu</h2>
      {products.map((product, index) => (
        <div key={index}>
          <div>
            <img src={product.image} style={{ height: 100, width: '80%' }} alt="" />
            <div>
              <h5>name:{product.name}</h5>
              <h5>price: R{product.price}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Food;
