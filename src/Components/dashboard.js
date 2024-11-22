import React from "react";
import "./dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEllipsis, faFeather, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

export default function Dashboard() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid mx-3">
          <a className="navbar-brand " href="#">
          <p className="mb-0 fs-4 fw-semibold"><FontAwesomeIcon icon={faFeather} /> {5+5}</p>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex justify-content-between ">
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faBars} className="fs-4 me-4" style={{cursor:'pointer'}}/>
                    <div className="icon-input">
                        <p className="icon m-0"><FontAwesomeIcon icon={faMagnifyingGlass} /></p>
                        <input className="input px-3" placeholder='Search now'/>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <p className="position-relative mb-0 me-4">
                        <FontAwesomeIcon icon={faBell} className="fs-4"  style={{cursor:'pointer'}}/>
                        <span className="position-absolute badger top-0 start-100 translate-middle p-1 border border-light rounded-circle">
                        </span>
                    </p>
                    <div className="profile me-4"></div>
                    <FontAwesomeIcon icon={faEllipsis} className="fs-4" style={{cursor:'pointer'}}/>
                </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="row m-0">
        <div className="col-2 sider">
            <div className="list">
                <a href="#" className="active"><i class="fa-regular fa-grid-2 ms-1 me-2"></i>Dashboard</a>

                <a href="#"><i className="fa-regular fa-gear ms-1 me-2"></i>Widgets</a>
                
                <a href="#"><i className="fa-regular fa-table-layout ms-1 me-2"></i>UI Elements <i className="fa-solid fa-angle-right self"></i></a>
            
                <a href="#"><i className="fa-regular fa-image ms-1 me-2"></i>Advanced UI <i className="fa-solid fa-angle-right self"></i></a>
            
                <a href="#"><i className="fa-regular fa-table-columns ms-1 me-2"></i>Form elements <i className="fa-solid fa-angle-right self"></i></a>
            
                <a href="#"><i className="fa-regular fa-brightness ms-1 me-2"></i>Editors <i className="fa-solid fa-angle-right self"></i></a>
            
                <a href="#"><i className="fa-regular fa-signal-bars ms-1 me-2"></i>Charts <i className="fa-solid fa-angle-right self"></i></a>

                <a href="#"><i className="fa-regular fa-table-cells-large ms-1 me-2"></i>Tables <i className="fa-solid fa-angle-right self"></i></a>
            
                <a href="#"><i className="fa-solid fa-arrow-up-right-from-square ms-1 me-2"></i>Popups</a>
            </div>
        </div>
        <div className="col-10 content">
            <div className="cont-title mt-5 mx-5" >
                <div>
                    <p className="m-0 fs-2 fw-bold">Welcome Praveenkumar K</p>
                    <p className="m-0 fs-5 sub">All system are running smoothly! You have <span>3 unread alerts!</span></p>
                </div>
                <div>
                    <p className="m-0 fs-6 sub">Today (22 Nov 2024) <i class="fa-solid fa-chevron-down"></i></p>
                </div>
            </div>
            <div className="box m-5">
                <div className="box1 pt-5 d-flex justify-content-end">
                    <div className="position-absolute d-flex">
                    <div className="fs-1 fw-bold me-3"><i className="fa-regular fa-brightness ms-1 me-2"></i>31°C</div>
                    <div className="lh-1 pt-2 pe-3"><p className="m-0 p-0 fs-3 fw-bold">Chennai</p><p className="fs-6 fw-semibold">India</p></div>
                    </div>
                </div>
                <div className="box2">
                    <div className="position-absolute py-5 ps-3 text-light fw-semibold">
                        <p>Today's Bookings</p>
                        <p className="fs-2 mb-0">4006</p>
                        <p>10.00% (30 days)</p>
                    </div>
                </div>
                <div className="box3">
                <div className="position-absolute py-5 ps-3 text-light fw-semibold">
                        <p>Today's Bookings</p>
                        <p className="fs-2 mb-0">61344</p>
                        <p>22.00% (30 days)</p>
                    </div>
                </div>
                <div className="box4">
                <div className="position-absolute py-5 ps-3 text-light fw-semibold">
                        <p>Number of Meetings</p>
                        <p className="fs-2 mb-0">34040</p>
                        <p>2.00% (30 days)</p>
                    </div>
                </div>
                <div className="box5">
                <div className="position-absolute py-5 ps-3 text-light fw-semibold">
                        <p>Number of Clients</p>
                        <p className="fs-2 mb-0">47033</p>
                        <p>0.22% (30 days)</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
