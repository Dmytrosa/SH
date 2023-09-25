import { HeroesApi, Follow, Unfollow } from "../api/api";
const SUB = () => 'SUB';
const UNSUB = () => 'UNSUB';
const SETHEROES =() =>"SET_HEROES"
const SETCURRENTPAGE =() =>"SET_CURRENT_PAGE"
const SETTOTALHEROESCOUNT =() =>"SET_TOTAL_HEROES_COUNT"
const TOGLEISFETCHING =() =>"TOGLE_IS_FETCHING"
const TOGLEISFETCHINGFOLLOWING =()=>"TOGLE_IS_FETCHING_FOLLOWING"
const CLEANISFETCHINGFOLLOWING =()=>"CLEAN_IS_FETCHING_FOLLOWING"

let initialState = {
    heroesinfo: [],
    pageSize: 5,
    totalHeroesCount: null,
    currentPage:1,
    pagePortion: 5,
    isFetching : false,
    isFetchingFollowing: [],
};


const heroesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SUB:
             {
            return {
              ...state,
              heroesinfo: state.heroesinfo.map(u =>{if (u.id ===action.heroId)
                {return {...u, followed: true}}
                return u;
              })
            }
        }
        case UNSUB:
             {
            return {
              ...state,
              heroesinfo: state.heroesinfo.map(u =>{if (u.id ===action.heroId)
                {return {...u, followed: false}}
                return u;
              })
            }
        }
        case SETHEROES:
            {
                return {...state, heroesinfo:action.heroes}
            }
        case SETCURRENTPAGE:
          {
            return {...state, currentPage: action.currentPage}
          }
        case SETTOTALHEROESCOUNT:
            {
              return {...state, totalHeroesCount:action.count }
            }
        case TOGLEISFETCHING:
          {
            return {...state, isFetching: action.set }
          }
          case TOGLEISFETCHINGFOLLOWING:
          {
            return {...state, 
              isFetchingFollowing: action.set
               ? [...state.isFetchingFollowing, action.heroId]
               : state.isFetchingFollowing.filter(id => id != action.heroid)

             }
          }
          case CLEANISFETCHINGFOLLOWING:
          {
            return {...state, isFetchingFollowing: [] }
          }
        default:
            return state;
    }
}



export const Sub =
  (heroId) => ({ type: SUB, heroId });

export const UnSub =
  (heroId) => ({ type: UNSUB, heroId });

export const SetHeroes =
  (heroes)  => ({type: SETHEROES, heroes });

export const SetCurrentPage =
  (currentPage)  => ({type: SETCURRENTPAGE, currentPage });

export const SetTotalHeroesCount =
  (count)  => ({type: SETTOTALHEROESCOUNT, count });

export const TogleIsFetching  =
  (set) => ({type: TOGLEISFETCHING, set});
  
export const TogleIsFetchingFollowing  =
  (set, heroId) => ({type: TOGLEISFETCHINGFOLLOWING, set, heroId});

export const CleanTogleIsFetchingFollowing  =
  () => ({type: CLEANISFETCHINGFOLLOWING});

export const GetHeroesThunk = (currentPage, pageSize) =>{ return async(dispatch) =>{
  dispatch(TogleIsFetching(true));
 let data= await HeroesApi.GetHeroes(currentPage,pageSize)
//  console.log(data)
      dispatch(SetTotalHeroesCount(data.totalHeroesCount))
      dispatch(SetCurrentPage(currentPage));
      dispatch(SetHeroes(data.heroes))
      dispatch(TogleIsFetching(false));
}}

export const FollowThunk = (heroId) =>{ return async(dispatch) =>{
  dispatch(TogleIsFetchingFollowing(true, heroId))
  let response= await Follow(heroId)
  
    if(response.resultCode == 0 ){
      dispatch(Sub(heroId))
    }
    dispatch(CleanTogleIsFetchingFollowing())
  
}}


export const  UnFollowThunk = (heroId) =>{ return async(dispatch) =>{
  dispatch(TogleIsFetchingFollowing(true, heroId))
  let response= await Unfollow(heroId)

    if(response.resultCode == 0 ){
      dispatch(UnSub(heroId))
    }
    dispatch(CleanTogleIsFetchingFollowing())

}}

export default heroesReducer;