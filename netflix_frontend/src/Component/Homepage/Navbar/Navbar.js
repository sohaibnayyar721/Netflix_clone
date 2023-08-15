import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Netflix_avatar from '../Pictures/Netflix_avatar.png'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Netflix_logo from '../Pictures/Netflix_logo.png'
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import movies_collection from "../Movies_collection";
import '../Search_moives/Searchitempage.css'
import sohaib_avatar from '../Pictures/Netflix_avatar.png'
import osama_avatar from '../Pictures/Profile2.PNG'
import asad_avatar from '../Pictures/Profile3.PNG'
import daniyal_avatar from '../Pictures/Profile4.PNG'
import ahsan_avatar from '../Pictures/Profile5.PNG'
import EditIcon from '@mui/icons-material/Edit';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { useNavigate } from "react-router-dom";
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from "react-router-dom";

function Navbar(props) {

  const [nav, setnav] = useState(false)

  useEffect(() => {
    function func1() {
      if (window.scrollY > 50) {
        setnav(true)
      }
      else {
        setnav(false)
      }
    }

    window.addEventListener('scroll', func1)
    return () => window.removeEventListener('scroll', func1)
 
  }, [])

  const [searchbar, set_searchbar] = useState(false)
  const [searchbutton, set_searchbutton] = useState(true)

  function search_bars() {
    set_searchbar(!searchbar)
    set_searchbutton(!searchbutton)
  }


  let [arrow_drop, set_arrow_drop] = useState(false)
  function arrow_drop_f() {
    set_arrow_drop(!arrow_drop)
    props.data_dropdown(true)
  }

  let [arr, set_arr] = useState(true)
  let input_ref = useRef(null)

  useEffect(() => {
    function searches(event) {
      if (input_ref.current && !input_ref.current.contains(event.target)) {
        set_searchbar(false)
        set_searchbutton(true)
      }
    }
    window.addEventListener('mousedown', searches)

    return () => window.removeEventListener('mousedown', searches)

  }, [])

  let [search_movie_item, set_search_movie_item] = useState(false)
  let [search_values, set_search_values] = useState('')
  let [val,set_val]=useState(' ')

  function cancel_movie_item() {
    set_search_movie_item(false)
    set_searchbar(false)
    set_searchbutton(true)
    set_val(true)
  }
  function search(e) {
    if (e.target.value || e.target.value === '') {
      set_search_movie_item(true)
      set_search_values(e.target.value)
      set_val(false)

    }
  }
  useEffect(()=>{
    props.search_val(val)
  },[val])
 

  let [drop_value, set_drop_value] = useState(false)
  let drop_down_hide = useRef(null)


  useEffect(() => {
    let handleclick = (event) => {
      if (drop_down_hide.current && !drop_down_hide.current.contains(event.target)) {
        set_drop_value(false)
      }
    }
    window.addEventListener('mousedown', handleclick)

    return () => { window.removeEventListener('mousedown', handleclick) }
  }, [])


  let navigate = useNavigate()
  function signout() {
    localStorage.removeItem('token')
    navigate('/')
  }

let [drop_value_sidebar,set_drop_value_sidebar]=useState(false)

  return (

    <div className={`mainss`}>

      <nav>
        <div className={`nav_elements ${nav && 'nav_bg_black'}`}>

          <div className="nav_right">

            <div className="menu-icon">
              <MenuIcon className="icons" onClick={()=>{set_drop_value_sidebar(!drop_value_sidebar)}}/>
            </div>

            <img id='net-logo' src={Netflix_logo} ></img>

            <div className="browse" onClick={() => set_drop_value(!drop_value)}>
              <p>Browse</p>
              <ArrowDropDownIcon style={{ color: "white", marginTop: "5px" }} />
            </div>
          </div>




          <div className="lists_item">
            <ul>
              <li>
                <Link to="/Homescreen" style={{ textDecoration: "none", fontStyle: 'none', color: 'white' }}>Home</Link>
              </li>
              <li>Series</li>
              <li>Films</li>
              <li>New & popular</li>
              <li>
                <Link to="/mylist" style={{ textDecoration: "none", fontStyle: 'none', color: 'white' }}>Mylist</Link>
              </li>
              <li>browser by Languages</li>
            </ul>
          </div>


          <div className="navar_left">
            {
              searchbar ?

                <div className="input_content">
                  <SearchIcon style={{ color: "white", position: "fixed", marginLeft: '5px' }}/>

                  <input onChange={search} placeholder={'Search..'}
                    className="input_search"
                  ></input>

                  <ClearIcon
                    onClick={cancel_movie_item}
                    className="search_bar_clear_btn"
                  />
                </div>
                :
                ""
            }
            {
              searchbutton ?
                <IconButton onClick={search_bars}>
                  <SearchIcon className="search-icons" />
                </IconButton> :
                ""
            }

            <div className="notif_child">
              <NotificationsNoneIcon

                style={{ color: "white", fontSize: '25px' }} />
              <p>Children</p>


              <div className="avatar_div">
                <img src={Netflix_avatar}></img>

                <ArrowDropDownIcon
                  onClick={arrow_drop_f}
                  style={{ color: "white" }}
                  className={`${arrow_drop && 'arrow_drop'}`}
                />
              </div>
              {
                arrow_drop ?
                  <div className="dropdown_list">
                    <div className="person_profile">
                      <img src={sohaib_avatar}></img>
                      <p>Sohaib</p>
                    </div>

                    <div className="person_profile1">
                      <img src={osama_avatar}></img>
                      <p>Osama</p>
                    </div>

                    <div className="person_profile1">
                      <img src={asad_avatar}></img>
                      <p>Asad</p>
                    </div>

                    <div className="person_profile1">
                      <img src={daniyal_avatar}></img>
                      <p>Daniyal</p>
                    </div>

                    <div className="person_profile1">
                      <img src={ahsan_avatar}></img>
                      <p>Ahsan</p>
                    </div>

                    <div className="person_profile1">
                      <EditIcon style={{ color: "white", font: "5px", marginLeft: "5px" }} />
                      <p>Manage Profiles</p>
                    </div>
                    <div className="person_profile1">
                      <ExitToAppIcon style={{ color: "white", font: "5px", marginLeft: "5px" }} />
                      <p>Exit Profile</p>
                    </div>

                    <div className="person_profile1">
                      <PermIdentitySharpIcon style={{ color: "white", font: "5px", marginLeft: "5px" }} />
                      <p>Account</p>
                    </div>

                    <div className="person_profile1">
                      <HelpOutlineOutlinedIcon style={{ color: "white", font: "5px", marginLeft: "5px" }} />
                      <p>Help Center</p>
                    </div>

                    <div className="Signout"
                      onClick={signout}
                    >

                      <p>Sign out of Netflix</p>
                    </div>

                  </div> :
                  ""
              }

              {
                drop_value ?
                  <div className="drop_down_item" ref={drop_down_hide}>
                    <ul>
                      <li>Home</li>
                      <li>Series</li>
                      <li>Films</li>
                      <li>New & popular</li>
                      <li>My lists</li>
                      <li>browser by Languages</li>
                    </ul>
                  </div>
                  : ""
              }



            </div>
            {
                drop_value_sidebar ?
                  <div id="sidebar-content"
                   >   
                    <ul>
                      <li>Home</li>
                      <li>Series</li>
                      <li>Films</li>
                      <li>New & popular</li>
                      <li>My lists</li>
                      <li>browser by Languages</li>
                      <div onClick={signout} style={{borderTop:"1px solid white",padding:"5px"}}>
                        <p id='sign_out'>Signout of Netflix</p>
                      </div>
                    </ul>

                  </div>
                  : ""
              }
          </div>

        </div>
      </nav>

      {
        search_movie_item ?
          <div className='containerss'>
            {movies_collection
              .filter(movie => {
                return movie.name.toLowerCase().includes(search_values.toLowerCase())
              })
              .map(movie => (
                <img key={movie.id} src={movie.image}></img>
              ))
            }
          </div> : ""
      }

    </div>

  );
}

export default Navbar;
