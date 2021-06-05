import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    getalldata();
    sendpostrequest();
  }, []);

  const getalldata = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log("Response is " + JSON.stringify(res))); //getting corrected text
  };
  const sendpostrequest = () => {
    const formdata = new URLSearchParams();
    formdata.append("id", "1");
    formdata.append("name", "Haroon Rashid");
    formdata.append("username", "haroon");
    formdata.append("email", "haroonrashid2210@gmail.com");
    formdata.append("address", "RWP");
    formdata.append("phone", "090078601");
    formdata.append("website", "NULL");
    formdata.append("company", "NULL");
    axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/users",
      data: formdata,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log("Post Response is " + response.status);
      })
      .catch(function (response) {
        console.log(response);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Open browser console to check axios result</p>
        <p className="App-link">ctrl + shift + J</p>
      </header>
    </div>
  );
}

export default App;
