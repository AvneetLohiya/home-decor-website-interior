import React from "react";
import "./home.css";

function Home() {
  return (
    <div style={{ backgroundColor: "seashel" }}>
      <div className="main-container-in-nav-bar">
        <div className="container-in-nav-bar-items">
          <h3>INTERIOR.CO</h3>

          <div
            style={{ display: "flex", marginLeft: "28rem", paddingTop: "15px" }}
          >
            <p className="nav-bar-items-content">Home</p>
            <p className="nav-bar-items-content">About</p>

            <p className="nav-bar-items-content">Favourltes</p>
            <p className="nav-bar-items-content">Lifestyle</p>

            <button className="get-started-button  " type="button">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="We-Help-to-Make-Modern">
          <h4>
            We Help to <br /> Make Modern Interior
          </h4>
          <div className="We-combine-interior-and-extrior">
            <p>
              We combine interior and Exterior design <br />
              services and often provide them as a single <br /> solution.It
              helps us...
            </p>
          </div>
        </div>
        <div>
          <img
            className="image-of-interior-of-home"
            src="https://img.freepik.com/premium-photo/tropical-interior-design-living-room_269031-60.jpg?w=2000"
          />
        </div>
      </div>
      <div
        style={{
          paddingLeft: "8rem",
          backgroundColor: "seashell",
          height: "105px",
          paddingBottom: "20px",
        }}
      >
        <div style={{display:"flex"}}>
          <div className="outer-part-image-of-v-icon">
          <img
            className="image-of-v-icon"
            src="https://cdn-icons-png.flaticon.com/512/3600/3600967.png"
          /></div>
          <input
            className="input-type-enter-your-email"
            type="text"
            placeholder="Enter your email"
          />
          <div className="outer-border-of-start-button">
          <button className="button-start" type="button">
            Start
          </button>
          </div>
        </div>
      </div>

      <div className="Connect-with-us">
        <h2>Connect with us</h2>
      </div>
      <div style={{ backgroundColor: "#f5f5f5", height: "6rem" }}>
        <img
          className="pay-icon"
          src="https://cdn-icons-png.flaticon.com/512/5977/5977576.png"
        />
        <img
          className="pay-icon"
          src="https://cdn-icons-png.flaticon.com/512/5977/5977576.png"
        />
        <img
          className="pay-icon"
          src="https://cdn-icons-png.flaticon.com/512/5977/5977576.png"
        />
        <img
          className="pay-icon"
          src="https://cdn-icons-png.flaticon.com/128/179/179457.png"
        />
        <img
          className="pay-icon"
          src="https://cdn-icons-png.flaticon.com/128/196/196565.png"
        />
      </div>

      <div style={{ display: "flex", paddingTop: "4rem", gap: "12rem",  }}>
        <div className="We-Help-to-Make-Modern">
          <h4>
            Top Fashion <br /> Brands In The World
          </h4>
          <div className="We-combine-interior-and-extrior">
            <p>
              Lorem ipsum dolor sit amet,consectetur adipiscing elit, <br />
              sed to eiusmod tempor incididunt ut labore et dolore <br /> magna
              aliqua Ut enim ad minim veniam.{" "}
            </p>
            
          </div>
          <button
              className="get-started-button-in-top-fashion-brands"
              type="button"
            >
              Get Started
            </button>
        </div>

        <div>
          <img
            className="image-of-interior-of-home-with-bathroom-accesories"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq1pQRJXJYwVhij37-GtYvWU8V_MeJGJUH1A&usqp=CAU"
          />
        </div>
      </div>


      <div style={{ display: "flex", paddingTop: "4rem", backgroundColor:"#f5f5f5" }}>
       <div>
       
          <img
            className="image-of-the-office"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5izzUQpCWort1K7YkICuVEg4_0E_ZOvgmFw&usqp=CAU"
          />
          
          
        </div>
       

        <div >
          <h4 className="Hot-deals-for-you">
            Hot <br /> Deals For You
          </h4>
          <div className="Lorem-ipsum-dolor-sit-amet">
            <p>
              Lorem ipsum dolor sit amet,consectetur adipiscing elit, <br />
              sed to eiusmod tempor incididunt ut labore et dolore <br /> magna
              aliqua Ut enim ad minim veniam.
            </p>
           
          </div>
          <div className="From-fashion-weeks-without-shows-to-brands">
       <p>From fashion weeks without shows to brands <br/> abandoning the traditional schedules. Covid-19 <br/> has thrown the industry
       into a state of flux</p>
      </div>
      </div>
        </div>


      <div>
        <h1 style={{paddingTop:"15px", paddingLeft:"8rem"}}>You Might Also Be Interested In..</h1>


        <div style={{ display: "flex", paddingTop: "4rem" }}>
       <div>
       
          <img
            className="image-of-the-office"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-decor-ideas-light-fixtures-1580421054.jpg"
          />
          
          
        </div>
       

        <div >
        {/* <img className="image-of-the-Hall-with-stairs-at-the-cenetr" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTekXowoMVtvokVDLhYY0UNHX9hMKqKYDocLw&usqp=CAU"/> */}
                  <h4 className="LATEST-STORIES">
            LATEST STORIES
          </h4>
          <div className="Premmium-Quality-And-Outstanding-Services">
            <p>
              Premmium Quality And Outstanding <br/> Services
            </p>
            
           
          </div>
          <button
              className="get-started-button-in-top-fashion-brands"
              type="button"
            >
              Read Now
            </button>
          
      </div>
        </div>
       </div>



       <div style={{ display: "flex", paddingTop: "4rem", backgroundColor:"#f5f5f5" }}>
       <div>
       
          <img
            className="image-of-the-two-person-calling"
            src="https://image.shutterstock.com/image-photo/side-view-two-fun-young-600w-2142664673.jpg"
          />
          
          
        </div>
       

        <div >
          <h4 className="Hot-deals-for-you">
          We provide <br/> Best services
          </h4>
          <div className="Lorem-ipsum-dolor-sit-amet">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typese <br/> industry. Lorem Ipsum has been the 
              industry's standard dummy <br/> text ever since the 1500s, when an unknown printer took a galley <br/> os type
              and <br/> scrambled it to make a type specimen book. It has <br/> survived not only five.
            </p>
           
           
          </div>
          <button
              className="get-started-button-in-top-fashion-brands"
              type="button"
            >
              Start Now
            </button>
          
      </div>
        </div>

        <div style={{backgroundColor:"rgb(163, 135, 140)"}}>
  <h1 style={{paddingLeft:"8rem", paddingTop:"5rem", backgroundColor:"rgb(163, 135, 140)",height:"8rem",fontSize:"40px"}}>

           Get notified you can <br/>still join the waitist</h1>

           <div
        style={{
          paddingLeft: "8rem",
          backgroundColor: "rgb(163, 135, 140)",
          height: "70px",
          paddingBottom: "20px", paddingTop:"15px"
        }}
      >
        <div>
          
          
          <input
            className="input-type-enter-your-email-address"
            type="text"
            placeholder="Enter your email address"
          />
          <button className="button-start-trial" type="button">
            Start trial
          </button>
          
        </div>
      </div>
          

        </div>
       
      

     
    </div>
  );
}

export default Home;
