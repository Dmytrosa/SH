import React, { PureComponent } from "react";
import HeroesBar from "./HeroesBar/HeroesBar"
class HeroesAPIContainer extends PureComponent {

  componentDidMount = () => {
    // console.log("HeroesAPIContainer",this.props)
    this.props.GetHeroesThunk(this.props.currentPage, this.props.pageSize)
  }
  onPageChanged = (pageNumber) => {
    this.props.GetHeroesThunk(pageNumber, this.props.pageSize)
  }
  render() {
    return < HeroesBar {...this.props} componentDidMount={this.componentDidMount} onPageChanged={this.onPageChanged} />
  }
}

export default HeroesAPIContainer;