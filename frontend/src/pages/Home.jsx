import React from "react";
import Navbar from "../components/Navbar";
import ParkingFinderCard from "../components/ParkingFinderCard";
import boxImg from "../assets/hero_img.png";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="hero_section">
        <div className="hero_left">
          <ParkingFinderCard />
        </div>
        <div className="hero_right">
          <div className="here_right_text">
            <h1>Smart Parking Smart Solution</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et enim
              repudiandae laborum deserunt facere unde quaerat quae sunt vitae,
              tempora ipsa, alias error architecto. Sequi doloribus assumenda
              odio recusandae! Nobis.
            </p>
          </div>
        </div>
      </div>
      <div className="feature_boxs container">
        <div className="box">
          <h3>Wherever, whenever </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            consequatur magni ab sapiente repellat, adipisci sed, laudantium
            asperiores repellendus natus inventore expedita quis voluptatem
            obcaecati quo? Repellat accusantium totam velit.
          </p>
        </div>
        <div className="box">
          <h3>Peace of mind</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            consequatur magni ab sapiente repellat, adipisci sed, laudantium
            asperiores repellendus natus inventore expedita quis voluptatem
            obcaecati quo? Repellat accusantium totam velit.
          </p>
        </div>
        <div className="box">
          <h3>Seamless experience</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            consequatur magni ab sapiente repellat, adipisci sed, laudantium
            asperiores repellendus natus inventore expedita quis voluptatem
            obcaecati quo? Repellat accusantium totam velit.
          </p>
        </div>
      </div>
      <div className="big_box">
        <div className="box_left">
          <img src={boxImg} alt="" />
        </div>
        <div className="box_right">
          <h1>SMART PARKING</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et enim
            repudiandae laborum deserunt facere unde quaerat quae sunt vitae,
            tempora ipsa, alias error architecto. Sequi doloribus assumenda odio
            recusandae! Nobis.
          </p>
        </div>
      </div>
      <div className="big_box2">
        <div className="box_left">
          <h1>SMART PARKING</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et enim
            repudiandae laborum deserunt facere unde quaerat quae sunt vitae,
            tempora ipsa, alias error architecto. Sequi doloribus assumenda odio
            recusandae! Nobis.
          </p>
        </div>
        <div className="box_right">
          <img src={boxImg} alt="" />
        </div>
      </div>
      <div className="joinus_section">
        <div className="joinus_text">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
            tenetur possimus cumque pariatur tempora distinctio modi aliquid
            obcaecati, perferendis voluptates dolorum repellat. Eos culpa
            distinctio esse consectetur sit. Sapiente accusantium officia, quo
            veritatis vel voluptatum, ipsum asperiores blanditiis tenetur,
            magnam eligendi numquam alias quod incidunt omnis enim esse? Numquam
            corrupti illo eos ad obcaecati, quod aperiam quidem fuga eveniet
            assumenda quaerat, maxime consectetur repellendus iusto totam sunt
            odio autem, suscipit corporis cumque omnis? Iusto, voluptate.
            Commodi alias nihil consequatur iure nesciunt, eum obcaecati debitis
            fuga asperiores explicabo voluptatibus nemo animi rerum.
            Reprehenderit et blanditiis natus. Consectetur dignissimos commodi
            voluptatum inventore!
          </p>
          <button className="btn">Join Us</button>
        </div>
      </div>
      <div className="about_section">
        <div className="about_text">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            nisi a nulla ipsam nesciunt ipsum, officiis quas. Suscipit
            dignissimos ipsum at delectus hic expedita quidem repellat
            assumenda, laborum, dolor non, laudantium id facilis unde quis eaque
            exercitationem. Voluptas, impedit quis nulla rem suscipit
            repudiandae unde deserunt hic eaque ipsa in maiores perspiciatis
            consequuntur, voluptatibus, omnis dolorum. Quas quis architecto eos
            facere nobis dolorem sequi enim perspiciatis iure. Ex neque hic
            ullam praesentium quo molestias voluptate quod quae atque commodi!
            Dolore nulla itaque voluptates provident totam cumque, id cupiditate
            asperiores accusantium velit, eos rem ducimus, voluptatibus labore
            expedita magnam pariatur quam!
          </p>
        </div>
      </div>
      <div className="contact_section">
        <div className="contact_form">
          <h2>Contact Us</h2>
          <form action="">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
            <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
