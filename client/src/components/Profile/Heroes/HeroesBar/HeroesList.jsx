import React from "react";
import q from "./../Heroes.module.css";
import bb from "../../../Assets/Blackbutton.module.css"
import heroPhoto from "../../../../additions/NoHeroPhoto.jpg";
import Loader from "../../../Assets/Loader";
import { NavLink } from "react-router-dom";

const HeroesList = (props) => {
  // console.log("HeroesList",props)
  return (
    <div className={q.heroesList}>
      {props.heroesinfo.map(u => <div className={q.container} key={u._id}>
        <div className={q.box}>
          <span className={q.title}> {u.nickname}</span>
          <div>
            <div >
              <NavLink
                to={'./../Profile/' + u._id}>
                <img src={u.photos?.small != null ? u.photos.small : heroPhoto} className={q.Ava} alt="monkey" />
              </NavLink>
            </div>
            <div style={{maxWidth:"30%"}}>
              <NavLink to={'./../Profile/' + u._id} style={{textDecoration: "none"}}>
              <button className={bb.Bbutton}>Details</button> 
            </NavLink>
          </div>
            </div>
        </div>
      </div>)}
    </div>
  )
}
export default HeroesList


