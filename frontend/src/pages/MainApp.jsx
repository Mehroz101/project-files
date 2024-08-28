import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ParkingFinderCard from "../components/ParkingFinderCard";
import "../styles/MainApp.css";

import ListingContainer from "../components/ListingContainer";
import ListingDetail from "../components/ListingDetail";
const MainApp = () => {
  const [togglebtn, setToggelbtn] = useState(false);
  const [parkingInput, setParkingInput] = useState(false);
  const [showListingDetail, setShowListingDetail] = useState(false); // State to control ListingDetail visibility

  const handleShowDetail = () => {
    setShowListingDetail(true); // Show ListingDetail
  };

  const handleCloseDetail = () => {
    setShowListingDetail(false); // Hide ListingDetail
  };
  console.log(parkingInput);
  return (
    <>
      <div className="main_page">
        <Navbar />
        <div className="app_container">
          <div className="app_left">
            <div
              className={
                parkingInput
                  ? "ParkingFinderCard"
                  : "ParkingFinderCard ParkingFinderCard_hide"
              }
            >
              <ParkingFinderCard />
            </div>
            <div
              className={
                parkingInput
                  ? "parkingFinderDetail parkingFinderDetail_hide"
                  : "parkingFinderDetail "
              }
              onClick={() => setParkingInput(!parkingInput)}
            >
              <p className="location">Mall of Multan, Multan</p>
              <div className="datetime">
                <span className="arrival">14-08-24 4:00PM</span>
                <span className="leave">14-08-24 7:00PM</span>
              </div>
            </div>
            <div className="app_listings">
              <div className="listing_filter_sort">
                <select name="sort" id="sort">
                  <option>sort by</option>
                  <option value="price">Price</option>
                  <option value="distance">Distance</option>
                </select>
                <select name="filter" id="filter">
                  <option>filter</option>
                  <option value="CCTV">CCTV</option>
                  <option value="gurad">Guard</option>
                </select>
                <button
                  className="toggle_btn"
                  onClick={() => setToggelbtn(!togglebtn)}
                >
                  {togglebtn ? "list" : "map"}
                </button>
              </div>
              <div
                className={
                  togglebtn
                    ? "Listing_container Listing_container_hide "
                    : "Listing_container"
                }
              >
                <ListingContainer onShowDetail={handleShowDetail}/>
                <ListingContainer />
                <ListingContainer />
                <ListingContainer />
              </div>
            </div>
            {showListingDetail && (
              <div className="popup_detail">
                <ListingDetail onHideDetail={handleCloseDetail} />
              </div>
            )}
          </div>
          <div
            className={togglebtn ? "app_right" : "app_right app_right_hide"}
            onClick={() => setParkingInput(false)}
          >
            <ListingContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainApp;
