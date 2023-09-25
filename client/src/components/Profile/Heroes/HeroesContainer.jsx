import HeroesAPIContainer from "./HeroesAPIContainer";
import {
  UnSub,
  SetHeroes,
  SetCurrentPage,
  SetTotalHeroesCount,
  TogleIsFetching,
  GetHeroesThunk,
  UnFollowThunk
} from "../../../redux/heroesReduser";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  // console.log("State",state)
  return {
    heroesinfo: state.heroespage.heroesinfo,
    pageSize: state.heroespage.pageSize,
    totalHeroesCount: state.heroespage.totalHeroesCount,
    currentPage: state.heroespage.currentPage,
    pagePortion: state.heroespage.pagePortion,
    isFetching: state.heroespage.isFetching,
    isFetchingFollowing: state.heroespage.isFetchingFollowing,
  }
}


const HeroesContainer =
  (connect
    (mapStateToProps,
      {
       UnSub, SetHeroes, SetCurrentPage, SetTotalHeroesCount,
        TogleIsFetching,
        GetHeroesThunk, UnFollowThunk
      })(HeroesAPIContainer));
export default HeroesContainer;