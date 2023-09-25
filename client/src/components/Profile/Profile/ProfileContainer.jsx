import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import {ViewHeroProfile, ApdatePersonalInfo}
 from "../../../redux/profileReducer";
import { connect } from "react-redux";
import {
  useLocation,
  useNavigate,
  useParams, 
} from "react-router-dom";
import { compose } from "redux";
import { HeroesApi } from "../../../api/api";

 const ProfileContainer= (props)=>  {
  console.log("ProfileContainer",props)
  function Mount() {
    useEffect(() => {let profileId = props.router.params.profileId;
          HeroesApi.GetHero(profileId, props.ViewHeroProfile)
        }, [props.router.location]);
    return (
      <div>
        <Profile  {...props.profile} />
      </div>
    );
  };

 return Mount()
};

let mapStateToProps = (state) => {
  return {
    profile: state.profilepage.profile,
    state: state,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    ViewHeroProfile: (profile) => {
      dispatch(ViewHeroProfile(profile));
    },
    ApdatePersonalInfo:(profile) =>{
      dispatch(ApdatePersonalInfo(profile))
    }
  }       
}
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}


 export default compose (
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ProfileContainer)