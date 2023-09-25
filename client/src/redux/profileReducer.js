import { ProfileApi } from "../api/api";
const HERODELITING = () => 'HERO-DELITING';
const GETDATA = () => 'GET-DATA';
const VIEWHEROPROFILE = () => 'VIEW-HERO-PROFILE';
const APDATEPERSONALINFO =()=>'APDATE-PERSONAL-INFO';

let initialState = {
  profile: null,
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case VIEWHEROPROFILE:
      {
        return {
          ...state,
          profile: action.profile
        };
      }
        case APDATEPERSONALINFO: 
        {            
          return {
            ...state,
           profile:{...state.profile, nickname: action.nickname,
            real_name: action.real_name, origin_description: action.origin_description,
            superpowers: action.superpowers, catch_phrase: action.catch_phrase},
          };    
        }   
    default:
      return state;
  }
}

export const DeleteHero =
  (id) => ({ type: HERODELITING, id}); 

export const ViewHeroProfile =
  (profile) => ({ type: VIEWHEROPROFILE, profile });

export const GetData =
  () => ({ type: GETDATA });

export const ApdatePersonalInfo =
  (nickname, real_name, origin_description, superpowers, catch_phrase) => 
  ({ type: APDATEPERSONALINFO, nickname , real_name, origin_description, superpowers, catch_phrase});


export default profileReducer;