import React from "react";
import Img from "../assets/hero_img.png";
const ReservationHistory = () => {
  return (
    <>
      <div className="reservation_history_container">
        <div className="reservation_history_top">
          <h2>Booking History</h2>
          <select name="filter" id="filter">
            <option value="pending">pending</option>
            <option value="completed">completed</option>
            <option value="canceled">canceled</option>
          </select>
        </div>
        <div className="reservation_history_bottom">
          <div className="reservation_orders">
            <div className="order">
              <div className="order_left">
                <img src={Img} alt="" />
              </div>
              <div className="order_right">
                <div className="order_right_top">
                  <h3>Mall of Multan, Multan</h3>
                  <span>id:12345</span>
                </div>
                <div className="order_right_datetime">
                  <span className="arrival">08/14/24 4:00PM</span>
                  <span className="leave">08/14/24 7:00PM</span>
                </div>
                <div className="order_right_price">
                  <p>Reserved in $7</p>
                </div>
                <div className="order_right_btn">
                  <button>Reserve Again</button>
                  <div className="status">
                    <span className="cancel">canceled</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order">
              <div className="order_left">
                <img src={Img} alt="" />
              </div>
              <div className="order_right">
                <div className="order_right_top">
                  <h3>Mall of Multan, Multan</h3>
                  <span>id:12345</span>
                </div>
                <div className="order_right_datetime">
                  <span className="arrival">08/14/24 4:00PM</span>
                  <span className="leave">08/14/24 7:00PM</span>
                </div>
                <div className="order_right_price">
                  <p>Reserved in $7</p>
                </div>
                <div className="order_right_btn">
                  <button>Reserve Again</button>
                  <div className="status">
                    <span className="complete">completed</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order">
              <div className="order_left">
                <img src={Img} alt="" />
              </div>
              <div className="order_right">
                <div className="order_right_top">
                  <h3>Mall of Multan, Multan</h3>
                  <span>id:12345</span>
                </div>
                <div className="order_right_datetime">
                  <span className="arrival">08/14/24 4:00PM</span>
                  <span className="leave">08/14/24 7:00PM</span>
                </div>
                <div className="order_right_price">
                  <p>Reserved in $7</p>
                </div>
                <div className="order_right_btn">
                  <button>Reserve Again</button>
                  <div className="status">
                    <span className="pending">pending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationHistory;
