import React, { useState } from "react";
import "../Components/HomeComponent";
import HomeComponent from "../Components/HomeComponent";
import { useMutation, gql } from "@apollo/client";

const g = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      token
      username
      createdAt
    }
  }
`;

function Login(props) {
  const [inputType, setInputType] = useState("password");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [login] = useMutation(g, {
    variables: {
      username: user,
      password,
    },
  });
  const handleLogin = async () => {
    setLoading(true);
    const { data } = await login();
    if (data.login) {
      setLoading(false);
      setSuccess(true);
      localStorage.setItem("user", data);
    }
  };
  return (
    <HomeComponent>
      <h2>Hello Merchant!</h2>
      <div className="mt-5">
        <input
          className="mt-2"
          placeholder="Username\Email\Mobile Num"
          value={user}
          type="text"
          style={{ width: "70%", borderRadius: "7px" }}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          className="mt-2"
          type={inputType}
          placeholder="Password"
          value={password}
          style={{ width: "70%", borderRadius: "7px" }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <i
          class="fa fa-eye"
          style={{ marginLeft: "-25px", cursor: "pointer" }}
          onClick={() => {
            setInputType(inputType === "password" ? "text" : "password");
          }}
        ></i>
      </div>
      {!loading && !success && (
        <>
          <div className="mt-5 text-center" style={{ width: "70%" }}>
            <button
              onClick={handleLogin}
              className="rounded-button button-color-black"
            >
              Log in
            </button>
          </div>
          <div className="mt-3 text-center" style={{ width: "70%" }}>
            <button
              onClick={() => {
                props.history.push("/");
              }}
              className="rounded-button button-color-white"
            >
              Go back
            </button>
          </div>
        </>
      )}
      {success && (
        <div
          class="alert alert-primary mt-3"
          role="alert"
          style={{ width: "70%", borderRadius: "7px" }}
        >
          Logged in Successfully
        </div>
      )}
      {loading && (
        <div className="text-center" style={{ width: "70%" }}>
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </HomeComponent>
  );
}

export default Login;
