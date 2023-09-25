import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import b from "../../Assets/Blackbutton.module.css"
import q from "./Profile.module.css";
import Loader from "../../Assets/Loader";
import NonPhoto from "../../../additions/NoHeroPhoto.jpg"
import { UpdateForm } from "./UpdateForm";
import { HeroesApi } from "../../../api/api";

const Profile = (props) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [isContactsActive, setIsContactsActive] = useState(false)

  useEffect(() => {
    if (buttonClicked) {
      try{
      HeroesApi.DeleteHero(props._id)}
      catch(e){console.log(e)}
      setButtonClicked(false);
      window.history.back()
    } 
    return
  }, [buttonClicked]);

  const deleteHandler =(e)=>{
    setButtonClicked(true)
  }

  if (!props.nickname) {
    return (<Loader />)
  }
  return (
    <div className={q.Content}>
      <NavLink
        style={{ display: "block", textDecoration: "none", height: "70px", marginTop: "1.5%" }}
        to={'../'}>
        <button className={b.Bbutton} style={{ width: "16%", height: "60%", fontSize: "20px", }}>To the list</button>
      </NavLink>

      <div className={q.info}>
        <div className={q.userInfo}>
          <div style={{ display: "block" }}>
            <div className={q.UserName}>{props.nickname}</div>
            <img src={
              // props.photos
              NonPhoto} className={q.ava}></img>
            <button className={`${b.Bbutton} ${b.R}`} onClick={deleteHandler}> Delete Hero</button>
          </div>
          {isContactsActive
            ?
            <UpdateForm {...props} setIsContactsActive={setIsContactsActive} />
            :
            <><button className={b.Bbutton} style={{display:"flex", height:"350px", marginTop:"50px"}} onClick={() => { setIsContactsActive(true) }} >Edit</button>
            <ul style={{ display:"flex",fontSize: "1.2rem",flexDirection:"column", paddingTop:"50px" }}>Information:
              <li>NickName: {props.nickname}</li>
              <li>Real Name: {props.real_name} </li>
              <li>Origin Description: {props.origin_description} </li>
              <li>Superpowers: {props.superpowers}</li>
              <li>Catch Phrase:{props.catch_phrase}</li>
            </ul></>}
          
        </div>
      </div>
    </div>

  );

}
export default Profile

