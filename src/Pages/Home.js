import React from "react";
import HomeComponent from "../Components/HomeComponent";
import { withRouter } from "react-router-dom";

function Home(props) {
  return (
    <HomeComponent>
      <h1>Manage all your offers and items from one place.</h1>
      <div className="mt-5 ">
        <button
          onClick={() => {
            props.history.push("/login");
          }}
          className="rounded-button button-color-black"
        >
          Log in
        </button>
      </div>
      <div className="mt-3">
        <button
          onClick={() => {
            props.history.push("/signup");
          }}
          className="rounded-button button-color-white"
        >
          Create Merchant Account
        </button>
      </div>
    </HomeComponent>
  );
}

export default withRouter(Home);
