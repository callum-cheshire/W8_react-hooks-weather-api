import "./App.css";
import Input from "../Input/input.js";
import Output from "../Output/output.js";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    async function getData() {
      const responseJSON = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=Yikagxq3cGRFyrcZf4E4zr90lDtJw9oLkejqEVBQ&date=${date}`
      ); //need to add API link
      //console.log(responseJSON)
      const response = await responseJSON.json();
      //console.log(response);
      setData(response); //need to add response which links to image i.e. response.image
    }
    getData();
  }, [date]);

  function handleClick(e) {
    //console.log("this is app.js", e)
    const newDate = e;
    setDate(newDate);
    console.log(date);
    // e.preventDefault();
  }

  return (
    <div className="App">
      <Input handleClick={handleClick} />
      <Output data={data} />
    </div>
  );
}

export default App;
