import React from "react";
import "../styles/CreateSpace.css";
import FileUpload from "./FileUpload";
const CreateSpace = () => {
  return (
    <>
      <div className="create_space">
        <h2>Create New Space</h2>
        <div className="space_detail_text">
          <div className="booking_detail_top"></div>
          <div className="input_box">
            <label htmlFor="title">Title</label>
            <input type="text" placeholder="Enter title" />
          </div>
          <div className="input_box">
            <label htmlFor="short_description">Short Description</label>
            <input type="text" placeholder="maximum 10-15 words " />
          </div>
          <div className="input_box">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              placeholder="maximum 150 words"
            ></textarea>
          </div>
        </div>
        <div className="file_upload">
          <FileUpload />
        </div>
        <div className="customer_information">
          <h2>Customer information</h2>
          <div className="input_container">
            <div className="input_combo_box">
              <div className="input_box">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Enter name" />
              </div>
              <div className="input_box">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter email" />
              </div>
            </div>
            <div className="input_box">
              <label htmlFor="phone_number">Phone number</label>
              <input type="number" placeholder="Enter phone number" />
            </div>
          </div>
        </div>
        <div className="vehicle_information">
          <h2>Vehicle information</h2>
          <div className="input_container">
            <div className="input_box">
              <label htmlFor="license">License number</label>
              <input type="text" placeholder="Enter License Plate Number" />
            </div>
          </div>
        </div>
        <div className="payment_information">
          <h2>Payment information</h2>
          <p>All Payment are Secure and Encrypted</p>
          <div className="payment_form">
            <div className="input_box">
              <label htmlFor="name">Cardholder Name</label>
              <input type="text" placeholder="Enter Cardholder Name" />
            </div>
            <div className="input_box">
              <label htmlFor="card_number">Card Name</label>
              <input type="number" placeholder="4111 111 111 111" />
            </div>
            <div className="input_combo_box">
              <div className="input_box">
                <label htmlFor="expire">Expiry</label>
                <input type="date" placeholder="08/12/2024" />
              </div>
              <div className="input_box">
                <label htmlFor="cvv">CVV</label>
                <input type="number" placeholder="1234" />
              </div>
            </div>
            <div className="input_combo_box">
              <div className="input_box">
                <label htmlFor="zip_code">Billing Zip Code</label>
                <input type="text" placeholder="Enter Zip Code" />
              </div>
              <div className="input_select_box">
                <label htmlFor="country">Country</label>
                <select name="country" id="country">
                  <option value="pakistan">Pakistan</option>
                  <option value="india">India</option>
                  <option value="united state">United State</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <button className="paynow_reserve">Reserve</button>
      </div>
    </>
  );
};

export default CreateSpace;
