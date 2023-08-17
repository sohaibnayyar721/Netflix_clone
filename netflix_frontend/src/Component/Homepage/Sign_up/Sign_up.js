import React, { useState } from "react";
import netflix_logo from '../Pictures/netflix_logo2.png'
import "./Sign_up.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Sign_up() {

    let [fname, set_fname] = useState('')
    let [lname, set_lname] = useState('')
    let [email, set_email] = useState('')
    let [password, set_password] = useState('')
    let [re_password, set_re_password] = useState('')
    let [check_email, set_check_email] = useState(false)
    let navigate = useNavigate()

    async function signup(e) {
        e.preventDefault()
        const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let check = email_pattern.test(email)
        console.log('this is check', check)
        if (fname && lname && email && password && re_password) {
            try {
                if (check !== true) {
                    set_check_email(true)
                } else {
                    await axios.post('https://netflix-clone-gold-zeta.vercel.app/api/register', { fname, lname, email, password })
                        .then((resp) => {
                            if (resp.data === 'Registration successful') {
                                alert(resp.data)
                                navigate('/signin')
                            }
                            else {

                                alert(resp.data)
                            }
                        }).catch((err) => {
                            alert(err)
                        })
                }


            }
            catch {
                alert('error in data transfer')
            }
        }
        else {
            alert('Invalid Input')
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
                    <div className="header">
                        <h1>Sign Up</h1>
                    </div>
                    <div className="input_and_btn_div">
                    {
                        check_email ?
                            <div id="incorrect_pass">
                                <h4>Invalid Email.
                                    <span className="span"> Please Enter valid email.</span>
                                </h4>
                            </div>
                            : ""
                    }
                        <input
                            className="input_m"
                            placeholder="First Name"
                            onChange={(e) => set_fname(e.target.value)}
                        ></input>

                        <input
                            className="input_m"
                            placeholder="Last Name"
                            onChange={(e) => set_lname(e.target.value)}
                        ></input>

                        <input className="inpt_password1" placeholder="Enter e-mail"
                            onChange={(e) => set_email(e.target.value)}
                        ></input>

                        <input className="inpt_password1" placeholder="Enter Password"
                            onChange={(e) => set_password(e.target.value)}
                        ></input>

                        <input className="inpt_password1" placeholder="Re-Enter Password"
                            onChange={(e) => set_re_password(e.target.value)}
                        ></input>

                        <button className="sign_ins"
                            onClick={signup}
                        >
                            Sign up
                        </button>
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

export default Sign_up;
