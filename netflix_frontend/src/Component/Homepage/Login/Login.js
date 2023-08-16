import React, { useState} from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Login.css";
import kids_image from '../Pictures/Kids.png';
import Tv from '../Pictures/Tv.PNG';
import mobile from '../Pictures/mobile.PNG';
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import netflix_logo from '../Pictures/netflix_logo2.png'
import IconButton from '@mui/material/IconButton';

function Login(props) {

  // -----What is Netflix------
  let [value1, setadd_value1] = useState(true)
  let [info1, set_info1] = useState(false)
  function add1() {
    setadd_value1(false)
    set_info1(true)
  }
  function clear1() {
    setadd_value1(true)
    set_info1(false)
  }
  // ------------end------------

  // -----How Much Does it cost------
  let [value2, setadd_value2] = useState(true)
  let [info2, set_info2] = useState(false)
  function add2() {
    setadd_value2(false)
    set_info2(true)
  }
  function clear2() {
    setadd_value2(true)
    set_info2(false)
  }
  // -----end----------------

  // -----Where i can watch------
  let [value3, setadd_value3] = useState(true)
  let [info3, set_info3] = useState(false)
  function add3() {
    setadd_value3(false)
    set_info3(true)
  }
  function clear3() {
    setadd_value3(true)
    set_info3(false)
  }
  // -----end----------------

  // -----How do i cancel------
  let [value4, setadd_value4] = useState(true)
  let [info4, set_info4] = useState(false)
  function add4() {
    setadd_value4(false)
    set_info4(true)
  }
  function clear4() {
    setadd_value4(true)
    set_info4(false)
  }
  // -----end----------------

  // -----How can i watch on netflix------
  let [value5, setadd_value5] = useState(true)
  let [info5, set_info5] = useState(false)
  function add5() {
    setadd_value5(false)
    set_info5(true)
  }
  function clear5() {
    setadd_value5(true)
    set_info5(false)
  }
  // -----end----------------

  // -----Is netflix good for kids?------
  let [value6, setadd_value6] = useState(true)
  let [info6, set_info6] = useState(false)
  function add6() {
    setadd_value6(false)
    set_info6(true)
  }
  function clear6() {
    setadd_value6(true)
    set_info6(false)
  }
  // -----end----------------
  const [get_values, set_get_values] = useState("");
  function get_input_values(e) {
    set_get_values(e.target.value);
  }

  const [sign, setsign] = useState(false);

  function getstarted() {
    setsign(true);
  }

  const navigate = useNavigate()
  function login() {

    if (get_values) {
      props.sendemail(get_values)
      navigate('/signin')
    }

  }

  function login_button(){
navigate('/signin')
  }
  return (
    <div className="parent">
      <div className="login">
        <div className="login_nav">
          <img
            className="netflix_logo"
            src={netflix_logo}
          ></img>

          <button className="Sign_in_btn" onClick={login_button}> Sign In</button>
        </div>
  
        <div className="pic_content_div">
          <div className="pic_content_container">
            <div className="header_div">
              <h1>
                Unlimited movies, TV shows, and more.
              </h1>
            </div>

            <p className="content2">Watch anywhere. Cancel anytime.</p>
            <p className="content3">
              Ready to watch? Enter your email to create or restart your membership.

            </p>
            <div className="input_btn">
              <input
                type="email"
                className="input"
                onChange={get_input_values}
                placeholder="Email Address"
              ></input>

              <button className="btn_getstarted" onClick={login}>
                <p>Get Started</p>
                <ArrowForwardIosIcon className="arrow"
                  style={{ strokeWidth: 5 }}
                />
              </button>

            </div>
          </div>

        </div>

      </div>
 
      <div className="Enjoy_tv_div">
        <div className="Enjoy_tv_container">
          <div id="Enjoy_tv_text">
            <h1>Enjoy on your TV</h1>
            <p id="para1">
              Watch on Smart TVs, Playstation,Xbox,
              Chromecast, Apple TV,Blu-ray players and <br />
              more.
            </p>
          </div>
          <div id="tv_imag_div">
            <img src={Tv}></img>
          </div>

        </div>
      </div>
      <div className="download_shows_div">
        <div id="download_shows_container">

          <div className="mobile_pic_div">
            <img src={mobile}></img>
          </div>
          <div className="download_shows_text">
            <h1>
              Download your shows to watch offline.
            </h1>
            <div className="paraw2">
              <p>Save your favorites easily and always have
                some thing to watch.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="watch_everywhere_div">
        <div className="watch_everywhere_text">
          <h1>Watch everywhere.</h1>
          <div id="para1">
            <p>Stream unlimited movies and TV shows on
              your phone, tablet, laptop and TV.</p>

          </div>
        </div>
      </div>

      <div className="create_profile_div">
        <div className="create_profile_container">
          <div className="image_div">
            <img
              src={kids_image}></img>
          </div>

          <div className="create_profile_text">
            <h1>Create profile for kids.</h1>
            <div className="para">
              <p> Send kids on adventures with their favorite
                characters in a space made just for them---
                free with your memberships.</p>
            </div>

          </div>
        </div>
      </div>

      <div className="frequently_asked_div">
        <div className="frequently_asked_container">
          <div className="header">

            <div className="header_para">
              <p>Frequently Asked Questions</p>
            </div>
          </div>


          <div className="main">

            <div id='ques_container'>
              <div id='question1'>
                <p>What is Netflix?</p>
                <div >
                  {
                    value1 ?
                      <IconButton onClick={add1}>
                        <AddIcon className="icon" style={{ color: 'white', fontSize: "50px", cursor: "pointer" }} />
                      </IconButton> :
                      <IconButton onClick={clear1}>
                        <ClearIcon className="icon" style={{ color: 'white', fontSize: "40px", cursor: "pointer" }} />
                      </IconButton>
                  }
                </div>
              </div>

              {info1 ?
                <div className="infos1">
                  <p>
                    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                  </p>
                  <p>
                    You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                  </p>
                </div>
                : <></>
              }

              <div id='question1'>
                <p>How much does netflix cost?</p>
                <div>
                  {
                    value2 ?
                      <IconButton onClick={add2}>
                        <AddIcon className="icon" style={{ color: 'white', fontSize: "50px", cursor: "pointer" }} />
                      </IconButton> :
                      <IconButton onClick={clear2}>
                        <ClearIcon className="icon" style={{ color: 'white', fontSize: "50px", cursor: "pointer" }} />
                      </IconButton>
                  }
                </div>
              </div>

              {info2 ?
                <div className="infos1">
                  <p>
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs250 to Rs1,100 a month. No extra costs, no contracts.
                  </p>
                </div>
                : <></>
              }

              <div id="question1">
                <p>Where can i watch?</p>
                {
                  value3 ?
                    <IconButton onClick={add3}>
                      <AddIcon className="icon" style={{ color: 'white', fontSize: "50px", cursor: "pointer" }} />
                    </IconButton> :
                    <IconButton onClick={clear3}>
                      <ClearIcon className="icon" style={{ color: 'white', fontSize: "50px", cursor: "pointer" }} />
                    </IconButton>
                }
              </div>
              {info3 ?
                <div className="infos1">
                  <p>
                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                  </p>
                  <br />
                  <p>
                    You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                  </p>
                </div>
                : <></>
              }

              <div id="question1">
                <p>How do i cancel?</p>

                {
                  value4 ?
                    <IconButton onClick={add4}>
                      <AddIcon className="icon" style={{ color: 'white', fontSize: "50px", cursor: "pointer" }} />
                    </IconButton> :
                    <IconButton onClick={clear4}>
                      <ClearIcon className="icon" style={{ color: 'white', fontSize: "50px", cursor: "pointer" }} />
                    </IconButton>
                }
              </div>
              {info4 ?
                <div className="infos1">
                  <p>
                    Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                  </p>
                </div>
                : <></>
              }

              <div id="question1">
                <p>How can i watch on Netflix?</p>
                {
                  value5 ?
                    <IconButton onClick={add5}>
                      <AddIcon className="icon" style={{ color: 'white', fontSize: "50px", cursor: "pointer" }} />
                    </IconButton> :
                    <IconButton onClick={clear5}>
                      <ClearIcon className="icon" style={{ color: 'white', fontSize: "50px", cursor: "pointer" }} />
                    </IconButton>
                }
              </div>
              {info5 ?
                <div className="infos1">
                  <p>
                    The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                  </p>

                </div>
                : <></>
              }

              <div id="question1">
                <p>Is netflix good for kids?</p>
                {
                  value6 ?
                    <IconButton onClick={add6}>
                      <AddIcon className="icon" style={{ color: 'white', fontSize: "50px", cursor: "pointer" }} />
                    </IconButton> :
                    <IconButton onClick={clear6}>
                      <ClearIcon className="icon" style={{ color: 'white', fontSize: "50px", cursor: "pointer" }} />
                    </IconButton>
                }
              </div>

              {info6 ?
                <div className="infos1">
                  <p>
                    Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                  </p>
                  <br />
                  <p>
                    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                  </p>
                </div>
                : <></>
              }

            </div>

          </div>

          <div className="ready_to_watch_text">
            <div className="ready_para">
              <p >
                Ready to watch? Enter your email to create or restart your membership.
              </p>
            </div>

            <div className="ready_to_watch_get_started">
              <div className="input_btn">
                <input
                  type="email"
                  className="input"
                  onChange={get_input_values}
                  placeholder="Email Address"
                ></input>

                <button className="btn_getstarted" onClick={login}>
                  <p>Get Started</p>
                  <ArrowForwardIosIcon className="icon"
                    style={{ strokeWidth: 5 }}
                  />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="question_contact_us_div">
        <div className="question_contact_us_text1">
          <p>Questions? Contact us.</p>
          <p>FAQ</p>
          <p>Investor Relations</p>
          <p>Privacy</p>
          <p>Speed Test</p>
          <p className="netflix_pakistan_text">Netflix Pakistan</p>
        </div>

        <div className="question_contact_us_text2">
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Cookies Prefrences</p>
          <p>Legal notices</p>
        </div>

        <div className="question_contact_us_text3">
          <p>Account</p>
          <p>Ways to Watch</p>
          <p>Corporate information</p>
          <p>Only on Netflix</p>
        </div>
        <div className="question_contact_us_text4">
          <p>Media Center</p>
          <p>Terms of Use</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
