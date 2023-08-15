import React from "react";
import Navbar from "../Navbar/Navbar";
import './Homescreen.css';
import Row1 from "../Rows/Row";
import Row2 from "../Rows/Row2";
import Row3 from "../Rows/Row3";
import Row4 from "../Rows/Row4";
import facebook from '../Pictures/facebook.png'
import Instagram from '../Pictures/Instagram.PNG'
import youtube from '../Pictures/youtube.PNG'
import { useEffect, useState, useRef } from "react";

import { name1, description1, random_video } from "../Random_banner_function";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Banner from "../../Banner/Banner";

function HomeScreen(props) {
  let navigate = useNavigate()


  let [show, set_show] = useState('')

  async function auths() {
    try {
      let payload = {
        data: "data"
      }
      let config = {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      }
      await axios.post('http://localhost:8000/api/homescreen', payload, config)
        .then((res) => {
          localStorage.getItem('token')
          if (res.data === 'profile access') {
            set_show(true)
          }
        })
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/Signin')
    }
    else {
      auths()
    }
  }, [])
  // console.log(auth)
  // const css = {
  //   fontSize: '30px',
  //   color: "white"
  // }

  // ---------minimize the description of movie at banner----------
  // -------------------ENDS--------------


  // -----------GET SIDE BAR VALUES TO SHOW-------

  let [get_sidebar_value, set_get_sidebar_value] = useState(false)
  let [homescreen_fade, set_homescreen_fade] = useState(false)
  function show_sidebars(data) {
    set_get_sidebar_value(data)
    set_homescreen_fade(data)
  }
  // -------------------ENDS--------------

  // --------hide and show right side arrow-----------
  let [arrow_drop, set_arrow_drop] = useState(false)
  function data_dropdown(data) {
    set_arrow_drop(!arrow_drop)
  }
  // -----------------End------------------------------



  // -----------Play and pause banner video on scroll----------
  let videoref = useRef(null)
  useEffect(() => {
    function pause_video() {
      if (window.scrollY > 100 && videoref.current) {
        videoref.current.pause()

      } else if (videoref.current) {
        videoref.current.play()

      }
    }
    window.addEventListener('scroll', pause_video)
    return () => window.removeEventListener('scroll', pause_video)
  }, [])

  // -----------------End------------------

  let [get, set_get] = useState('')
  function favss(data) {
    set_get(data)
    props.send(data)
  }


//  let[show,set_show]=useState('')
  function search_val(data){
    set_show(data)
    
  }

  return (

    <div className="homescreen_container">

      <Navbar show_sidebars={show_sidebars}
        data_dropdown={data_dropdown}
        search_val={search_val}
      />
      


          {
            show?
            <div className='homescreen'>

            {/* ---------------- NAVBAR CONTENTS-------------- */}

            <Banner />

            <div id="rows">
              <Row1 title='Trending Now' favss={favss} />


              <div style={{ marginTop: "5px", display: "flex", flexDirection: "column", gap: "15px" }}>

                <Row2 title='Series' />

                <Row3 title='New Releases' />

                <Row4 title='Action and Adventure' />

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
            </div>
            
          </div >
          : ""
          }
          
    </div>



  );
}

export default HomeScreen;
