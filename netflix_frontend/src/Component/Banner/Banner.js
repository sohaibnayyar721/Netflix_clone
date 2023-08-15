import React from 'react'
import './Banner.css';
import { useRef,useEffect } from 'react';
import { name1, description1, random_video } from "../Homepage/Random_banner_function";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
export default function Banner() {

    const min_description = (string) => {
        if (string.length > 14) {
          const limit = string.slice(0, 100);
          return limit + "...";
        }
      };

    let videoref = useRef(null)
    useEffect(() => {
      function pause_video() {
        if (window.scrollY > 100) {
          videoref.current.pause()
        } else {
          videoref.current.play()
        }
      }
      window.addEventListener('scroll', pause_video)
      return () => window.removeEventListener('scroll', pause_video)
    }, [])
  return (
    <div>
        <div id="banners" >
              <div id="ban_videos">
                <video ref={videoref} loop muted autoPlay>
                  <source src={random_video} />
                </video>
              </div>

              <div className="movies">
                <div className="movie_name_info">
                  <div className="movie_name">
                    <h1>{name1}</h1>
                  </div>
                  <div className="btn_play_infos">
                    <button className="btn_play">
                      <PlayArrowIcon style={{ fontSize: "30px", color: "white" }} />
                      <p className="btn_play_text">Play</p>
                    </button>
                    <button className="btn_infos">

                      <InfoIcon style={{ color: "white" }} />
                      <span className="btn_info_text"> More Info</span>

                    </button>
                  </div>

                  <div className="paragraph_div">
                    <p>
                      {min_description(`${description1}`)}
                    </p>
                  </div>

                </div>
              </div>

              <div id="bottom-fade" />
            </div>
    </div>
  )
}
