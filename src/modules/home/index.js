import axios from "axios";
import React, { useRef, useEffect } from "react";

const Home = () => {
  const ref = useRef();
  const handleName = (e) => {
    ref.current = e.target.value;
    document.getElementById("test").innerText = ref.current;
  };
  let url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    console.log("mount");
  let response = axios.get(url).then(response=>console.log(response))
  return () => {
      axios.Cancel();
    };
  }, []);
  console.log(axios.CancelToken)

  return (
    <div className="page">
      <input type="text" placeholder="Name" ref={ref} onChange={handleName} />
      <p id="test"></p>
    </div>
  );
};

export default Home;
