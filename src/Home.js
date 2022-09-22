import React, { useState, useEffect } from "react";

export default function Home() {
  const [Items, setItems] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) setItems(JSON.parse(data));
  }, []);
  return (
    <div className="container">
      <div className="row mt-5">
        {Items.map((item, index) => {
          return (
            <div className="card" key={index}>
              <img src={item.image} className="card-img-top" alt="..." />
            </div>
          );
        })}
      </div>
    </div>
  );
}
