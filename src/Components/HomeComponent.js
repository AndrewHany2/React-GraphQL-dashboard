import React from "react";

function HomeComponent(props) {
  return (
    <div>
      <main class="container">
        <div class="row mt-5">
          <div class="col-12 col-md-6">{props.children}</div>
          <div class="col-12 col-md-6">
            <img style={{ height: "500px" }} src="1.png" alt="profile" />
          </div>
        </div>
        <div className="mt-5 mx-auto">
          <h4 className="text-center">Dashboard Features</h4>
        </div>
        <div className="mt-4 d-flex flex-wrap justify-content-around text-center">
          <div className="m-2" style={{ width: "200px" }}>
            <img style={{ width: "180px" }} src="1.png" alt="profile" />
            <h6 className="my-2">Account Managment</h6>
            <p style={{ fontSize: "13px" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              facilis sequi culpa sunt et natus ex sint adipisci nesciunt unde
            </p>
          </div>
          <div className="m-2" style={{ width: "200px" }}>
            <img style={{ width: "180px" }} src="1.png" alt="profile" />
            <h6 className="my-2">Add coupon</h6>
            <p style={{ fontSize: "13px" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              facilis sequi culpa sunt et natus ex sint adipisci nesciunt unde
            </p>
          </div>
          <div className="m-2" style={{ width: "200px" }}>
            <img style={{ width: "180px" }} src="1.png" alt="profile" />
            <h6 className="my-2">Add Menu</h6>
            <p style={{ fontSize: "13px" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              facilis sequi culpa sunt et natus ex sint adipisci nesciunt unde
            </p>
          </div>
          <div className="m-2" style={{ width: "200px" }}>
            <img style={{ width: "180px" }} src="1.png" alt="profile" />
            <h6 className="my-2">Data Analytics</h6>
            <p style={{ fontSize: "13px" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              facilis sequi culpa sunt et natus ex sint adipisci nesciunt unde
            </p>
          </div>
          <div className="m-2" style={{ width: "200px" }}>
            <img style={{ width: "180px" }} src="1.png" alt="profile" />
            <h6 className="my-2">Payment</h6>
            <p style={{ fontSize: "13px" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              facilis sequi culpa sunt et natus ex sint adipisci nesciunt unde
            </p>
          </div>
        </div>
        <div className="mt-5 mx-auto">
          <h4 className="text-center">Partners</h4>
        </div>
        <div className="mt-4 d-flex flex-wrap justify-content-between">
          <div style={{ width: "150px" }}>
            <img
              style={{
                width: "180px",
                height: "50px",
                objectFit: "cover",
                objectPosition: "0% 50%",
              }}
              src="1.png"
              alt="profile"
            />
          </div>
          <div style={{ width: "150px" }}>
            <img
              style={{
                width: "180px",
                height: "50px",
                objectFit: "cover",
                objectPosition: "0% 50%",
              }}
              src="1.png"
              alt="profile"
            />
          </div>
          <div style={{ width: "150px" }}>
            <img
              style={{
                width: "180px",
                height: "50px",
                objectFit: "cover",
                objectPosition: "0% 50%",
              }}
              src="1.png"
              alt="profile"
            />
          </div>
          <div style={{ width: "150px" }}>
            <img
              style={{
                width: "180px",
                height: "50px",
                objectFit: "cover",
                objectPosition: "0% 50%",
              }}
              src="1.png"
              alt="profile"
            />
          </div>
          <div style={{ width: "150px" }}>
            <img
              style={{
                width: "180px",
                height: "50px",
                objectFit: "cover",
                objectPosition: "0% 50%",
              }}
              src="1.png"
              alt="profile"
            />
          </div>

          <div style={{ width: "150px" }}>
            <img
              style={{
                width: "180px",
                height: "50px",
                objectFit: "cover",
                objectPosition: "0% 50%",
              }}
              src="1.png"
              alt="profile"
            />
          </div>
        </div>
      </main>
      <footer className="container-fluid footer mt-5">
        <div className="mt-5 mx-auto">
          <h4 className="text-center pt-5" style={{ color: "white" }}>
            Contact us
          </h4>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <div className="m-5" style={{ color: "white" }}>
            <p>01276562945</p>
            <p>aaaaaaaaaaaaaaaaa</p>
            <p>aaaaaaaaaaaaaa</p>
            <div className="d-flex justify-content-around">
              <i class="fa fa-instagram"></i>
              <i class="fa fa-twitter"></i>
              <i class="fa fa-facebook-f"></i>
            </div>
          </div>
          <div className="m-5" style={{ color: "white" }}>
            <p>Policy</p>
            <p>aaaaaaaaaaaaa</p>
            <p>aaaaaaaaaaaaa</p>
          </div>
          <div className="m-5" style={{ color: "white" }}>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            <p>
              <input type="text" className="input-black" />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomeComponent;
