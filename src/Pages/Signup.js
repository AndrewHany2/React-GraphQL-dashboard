import React, { useState } from "react";
import HomeComponent from "../Components/HomeComponent";
import { useMutation, gql } from "@apollo/client";

const g = gql`
  mutation register(
    $username: String!
    $password: String!
    $confirmPassword: String!
    $email: String!
  ) {
    register(
      registerInput: {
        username: $username
        password: $password
        confirmPassword: $confirmPassword
        email: $email
      }
    ) {
      id
      email
      token
      username
      createdAt
    }
  }
`;
function Signup(props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [register] = useMutation(g, {
    variables: {
      username: user,
      password,
      confirmPassword,
      email,
    },
  });

  const handleRegister = async () => {
    setLoading(true);
    const { data } = await register();
    if (data.register) {
      setLoading(false);
      setSuccess(true);
      localStorage.setItem("user", data);
    }
  };
  return (
    <HomeComponent>
      <h4>Create your account</h4>
      <div className="mt-5">
        <input
          className="mt-2"
          placeholder="Username\Email\Mobile Num"
          type="text"
          value={user}
          style={{ width: "70%", borderRadius: "7px" }}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
      </div>
      <div className="mt-2">
        <input
          className="mt-2"
          placeholder="Email"
          type="text"
          value={email}
          style={{ width: "70%", borderRadius: "7px" }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="mt-2">
        <input
          className="mt-2"
          placeholder="Password"
          type="password"
          value={password}
          style={{ width: "70%", borderRadius: "7px" }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="mt-2">
        <input
          className="mt-2"
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          style={{ width: "70%", borderRadius: "7px" }}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
      </div>
      {loading ? (
        <div className="text-center" style={{ width: "70%" }}>
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {success ? (
            <>
              <div
                class="alert alert-primary mt-3"
                role="alert"
                style={{ width: "70%", borderRadius: "7px" }}
              >
                Created Successfully
              </div>
              <div className="mt-3 text-center" style={{ width: "70%" }}>
                <button
                  onClick={() => {
                    props.history.push("/login");
                  }}
                  className="rounded-button button-color-white"
                >
                  Login
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="mt-4 text-center" style={{ width: "70%" }}>
                <button
                  onClick={handleRegister}
                  className="rounded-button button-color-black"
                >
                  Create Account
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
        </>
      )}
    </HomeComponent>
  );
}

export default Signup;
