import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { Loader } from "./Loader";
import { PhotoFrame } from "./PhotoFrame";
const App = () => {
  const [image, setImage] = useState({});
  const [loader, setLoader] = useState(false);

  const callApi = (number) => {
    setLoader(true);
    fetch("https://jsonplaceholder.typicode.com/photos/" + number)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setImage(data);
        setLoader(false);
      });
  };

  useEffect(() => {
    console.log("image - ", image);
  }, [image]);

  const updateInput = (e) => {
    console.log("number - ", e.target.value);
    callApi(e.target.value);
  };

  return (
    <>
      Id number <input type="number" onChange={updateInput} />
      {loader && <Loader />}
      {Object.keys(image).length !== 0 && !loader && (
        <PhotoFrame url={image.url} title={image.title} />
      )}
    </>
  );
};

export default App;
