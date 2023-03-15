import React from "react";
import { useEffect, useState } from "react";
import "./output.css";

function Image(prop) {
  const [image, setImage] = useState([]);

  return (
    <div>
      <h1>{prop.data.title}</h1>
      <img src={prop.data.url} alt="Random space" />
      <p>{prop.data.explanation}</p>
    </div>
  );
}

export default Image;
