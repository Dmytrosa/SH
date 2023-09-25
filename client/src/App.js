import "./App.css";
import ProfileContainer from "./components/Profile/Profile/ProfileContainer";
import Loader from "./components/Assets/Loader";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import React, { PureComponent } from "react";
import { AddHero } from "./components/Profile/Heroes/AddHero";
import HeroesContainer from "./components/Profile/Heroes/HeroesContainer";


class App extends PureComponent {


  componentDidMount() {
  }
  render() {
    return (
      <div className="App-w">
        <div className="App-w-content">
          <Routes>
            <Route
              path="/Profile/:profileId?"
              element={<ProfileContainer />}
            />
            <Route
              path="/"
              element={<HeroesContainer />}
            />
            <Route
              path="/Loader"
              element={<Loader />}
            />
            <Route
              path="/AddHeroForm"
              element={<AddHero/>}
            />
          </Routes>
        </div>
      </div>
    );
  }
};

export default(App)