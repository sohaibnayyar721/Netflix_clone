import React, { useState } from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import netflix_logo from '../Pictures/netflix_logo2.png';
import { useNavigate } from "react-router-dom";
import "./Signin.css";
import axios from "axios";

function Signup({ first_email }) {
  let [email, set_email] = useState(first_email)
  let [password, set_password] = useState('')
  let [fail_password, set_fail_password] = useState(false)
  const navigate = useNavigate();
  let [token, set_token] = useState('')
  const check_empty_input = email.length > 0 && password.length > 0
    async function signin(e) {

    e.preventDefault()
    if (check_empty_input) {

      try {
        await axios.post('https://netflix-clone-gold-zeta.vercel.app/api/login', { email, password })
          .then((res) => {
            set_token(res.data)

            if (res.data.message === 'sucess') {
              localStorage.setItem('token', res.data.token)
              navigate('/HomeScreen')
            }
            else {
              set_fail_password(true)
            }
          })
      }
      catch {
        alert('Server Error')
      }
    }else{
      alert('Please enter all field')
    }
  }

  return (


    <div id="mains">
      <div id="bg-pic" />

      <div id='ctn'>
        <div id="navbar1">
          <img src={netflix_logo}
          ></img>
        </div>

        <div id="signups">
          <div id="header">
            <h1>Sign In</h1>
          </div>

          <div className="input_and_btn_div">

            {
              fail_password ?
                <div id="incorrect_pass">
                  <h4>Incorrect Password.
                    <span className="span"> Please try again or you can reset you password.</span>
                  </h4>
                </div>
                : ""
            }

            <input
              className="input_m"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => set_email(e.target.value)}
            ></input>
            <input className={`inpt_password1 ${fail_password && 'input_password1_border'}`} placeholder="Password"
              onChange={(e) => { set_password(e.target.value) }}
            ></input>

            <button className="sign_ins"
              onClick={signin}
            >
              Sign In
            </button>



            <div className="remember_x_help">

              <div className="chk_box_x_remember_me">

                <CheckBoxIcon className="check_boxs" style={{ color: 'rgb(159, 160, 161)', fontSize: '20px' }} />
                <p className="remember_me">
                  Remember Me
                </p>

              </div>

              <p id='need_help'>
                Need help?
              </p>

            </div>

            <div id="new_to_netflix_text">
              <div className="text_1">
                <p>New to Netflix?</p>


                <a href="./signup"><p className="p2"> Sign up now.</p></a>
              </div>

              <div id="this_page_div">
                <p>
                  This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>


      <div id="footer_div">

        <div id="FAQ_and_Cookie">
          <p>Questions? Contact us.</p>
          <p>FAQ</p>
          <p>Cookie Preferences</p>
        </div>

        <div id="help_and_Corporate">

          <p>Help Center</p>
          <p>Corporate Information</p>
        </div>

        <div id="terms_and_privacys">
          <p>Terms of Use</p>
          <p>Privacy</p>
        </div>
      </div>
    </div>

  );
}

export default Signup;
