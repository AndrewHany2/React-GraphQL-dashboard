import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar(props) {
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand>
          <Link to="/">OfferDose</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "30%",
            }}
          >
            <div className="navbar-active mr-auto">
              <Link to="/" exact>
                Dashboard
              </Link>
            </div>
            <div className="mr-auto">
              <Link to="#">Features</Link>
            </div>
            <div className="mr-auto">
              <Link to="#">Support</Link>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MyNavbar;
