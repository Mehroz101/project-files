import React, { useState } from "react";
import img from "../assets/hero_img.png";
const ListingDetail = ({onHideDetail}) => {
  //check this logic in listingContainer.jsx file
  // const [showlisting,setShowlisting] = useState(false)
  // {showlisting?"listing_detail_container listing_detail_container_hide":"listing_detail_container"}
  // onClick={()=>setShowlisting(!showlisting)}
  return (
    <>
      <div className="listing_detail_container" >
        <div className="back_btn">
          <span onClick={onHideDetail}><i class="fa-solid fa-xmark"></i></span>
        </div>
        <div className="listing_detail_image_box">
          <img src={img} alt="" />
        </div>
        <div className="listing_detail_section">
          <h2 className="listing_detail_title">Mall of Multan, Multan</h2>
          <div className="badge_shortdesc">
            <span className="badge">Secure</span>
            <span className="short_description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              eos!
            </span>
          </div>
          <div className="listing_rating">
            <span className="rating">* * * *</span>
            <span className="total_booking">100+ booking</span>
          </div>
        </div>
        <div className="listing_booking_details">
          <div className="booking_details_duration">
            <span>5h</span>
            <span>duration</span>
          </div>
          <div className="booking_details_fee">
            <span>$7</span>
            <span>parking fee</span>
          </div>
          <div className="booking_details_destination">
            <span>7min</span>
            <span>destination</span>
          </div>
        </div>
        <div className="listing_detail_features">
          <span className="feature">CCTV</span>
          <span className="feature">Underground</span>
          <span className="feature">secure</span>
        </div>
        <div className="listing_detail_description">
          <h3>Description</h3>
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            dignissimos et ut accusantium, rerum, expedita dolorem consequuntur
            ipsa corporis sint, dolorum dolores dolore corrupti deleniti
            veritatis cumque officiis quod saepe?
          </p>
        </div>
        <div className="listing_detail_btn">
          <button className="all_day_book_btn">All day in $57</button>
          <button className="book_btn">Reserve in $7</button>
        </div>
      </div>
    </>
  );
};

export default ListingDetail;
