import React from "react";
import Loader from "../../../Assets/Loader";
import HeroesList from "./HeroesList"
import Paginator from "../../../Assets/Paginator";
import b from "../../../Assets/Blackbutton.module.css"
import { NavLink } from "react-router-dom";

const HerousBar = (props) => {
  // console.log("HerousBar",props)
  return (
    <>
        { !props.heroesinfo.length>0 ? <Loader /> : <>
        <Paginator
          pageSize={props.pageSize}
          totalHeroesCount={props.totalHeroesCount}
          onPageChanged={props.onPageChanged}
          currentPage={props.currentPage}
          pagePortion={props.pagePortion} />
          <div style={{  display:"flex", justifyContent:"center", alignItems:"center", margin:"5px 0 5px 0" }}>
            <NavLink  to={'.././AddHeroForm'}>
            <button className={b.Bbutton}  style={{minWidth: "170px", minHeight:"60px", backgroundColor:"#39c80026"}}>Add Hero</button>
            </NavLink>
        </div>
          <HeroesList {...props}/>
      </>}
    </>
  )
}
export default HerousBar


