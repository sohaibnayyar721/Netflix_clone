import HomeScreen from "./Component/Homepage/HomeScreen/HomeScreen";
import Login from "./Component/Homepage/Login/Login";
import Signin from './Component/Homepage/Sign_in/Signin'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign_up from "./Component/Homepage/Sign_up/Sign_up";
import { useState } from "react";
import './App.css';

function App() {
  // ---------Email are get from login.js to App.js---------
  const [first_email, setemail] = useState('')
  function sendemail(data) {
    setemail(data)
  }
  let [zot, set_z] = useState('')
  function send(data) {
    set_z(data)
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login sendemail={sendemail} />} />
          <Route exact path="/Homescreen" element={<HomeScreen send={send} />} />

          {/* Email are send from App.js to Signin.js */}

          <Route exact path="/signin" element={<Signin first_email={first_email} />} />
          <Route exact path="/signup" element={<Sign_up />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
