import React, { useState } from "react";
import listingImg from "../assets/31757456_21-removebg-preview.png";
import { Link } from "react-router-dom";
const ListingContainer = () => {
  const [showlisting,setShowlisting] = useState(true)
//check this logic in listingDetail.jsx file
  const showslitingdetail=() =>{
    setShowlisting(!showlisting)
  }
  return (
    <>
      <div className="listing">
        <div className="listing_left">
          <img src={listingImg} alt="" />
        </div>
        <div className="listing_right">
          <div className="listing_title">
            <h3>Mall of Multan, Multan</h3>
          </div>
          <div className="listing_rating">
            <span className="rating">* * * *</span>
            <span className="total_booking">100+ booking</span>
          </div>
          <div className="listing_detail">
            <div className="listing_features">
              <span>0</span>
              <span>0</span>
              <span>0</span>
            </div>
            <span>
              <Link onClick={()=>showslitingdetail}>details</Link>
            </span>
          </div>
          <div className="listing_btn">
            <button><Link to="/reservation">Book in $7</Link></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingContainer;
