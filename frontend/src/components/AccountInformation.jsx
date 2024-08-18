import React, { useState } from "react";

import { Link } from "react-router-dom";
const AccountInformation = () => {
  const [resetform, setResetform] = useState(false);

  return (
    <>
        <div className="profile_right_form">
          <h2>Account Information</h2>
          <p className="form_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            eligendi praesentium corporis reiciendis! Temporibus deleniti
            repellat laudantium, quidem qui asperiores.
          </p>
          <div className="profile_from_container">
            <form>
              <div className="input_combo_box">
                <div className="input_box">
                  <label htmlFor="fName">First Name</label>
                  <input type="text" placeholder="first name" />
                </div>
                <div className="input_box">
                  <label htmlFor="lName">Last Name</label>
                  <input type="text" placeholder="last name" />
                </div>
              </div>
              <div className="input_box">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="email address" />
              </div>
              <div className="input_box">
                <label htmlFor="number">Phone Number</label>
                <input type="number" placeholder="0301 1111111" />
              </div>
              <button>Save and Update</button>
            </form>
          </div>
        </div>
        <div className="profile_right_reset_password">
          <button className="reset_pass" onClick={() => setResetform(true)}>
            Reset Password
          </button>
          <h2
            className={
              resetform
                ? "reset_password_from_head"
                : "reset_password_from_head_hide"
            }
          >
            Reset Password
          </h2>
          <from
            className={
              resetform ? "reset_password_from" : "reset_password_from_hide"
            }
          >
            <div className="input_box">
              <label htmlFor="oldPassword">Old Password</label>
              <input type="password" placeholder="old password" />
            </div>
            <div className="input_combo_box">
              <div className="input_box">
                <label htmlFor="newPassword">New Password</label>
                <input type="text" placeholder="password" />
              </div>
              <div className="input_box">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" placeholder="confirm password" />
              </div>
            </div>
            <button>Save</button>
          </from>
        </div>
        <button className="delete_account_btn">Delete my Account</button>
    </>
  );
};

export default AccountInformation;
