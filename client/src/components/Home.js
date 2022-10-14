import { Link } from "react-router-dom";
import VehiclePage from "./VehiclePage";


function Home({ user }) {
  if (user) {
    return <div className="home">
       <h1>Welcome, {user.username} ! <span>Your User_Code Is :</span> {user.id}</h1>
       <VehiclePage/>
       </div>
     
  } else {
    return <div className="top-head">
      <div>
      <h3>--------------------      Car & Heavy Truck Towing, Roadside, Repair & Recovery      --------------------</h3>
      </div>
        <div className="header">
      <h1>EXPERT-TOWING KE  <button type="click">Call Now</button> <button type="click">Payment</button></h1>
         </div>
         <div className="main-section">
         <div className="main-top">
          <h2>Our Exclusive Towing Service Can Get You Back to Normal Fast</h2>
          <img src="https://tditowing.com/img/local-towing-l.jpg" alt="top-img"></img>
          <h4>Expert-Towing Ke delivers fast response auto towing and roadside assistance throughout 
            Nairobi. Trusted by area law enforcement departments
             and national roadside providers, we are the reliable provider <br/> for towing and 
             roadside assistance services. We have a fleet of flatbed tow trucks and roadside
              vehicles to ensure you get the quickest response possible and get back on your way.</h4>
         </div> 
         </div>
         <Link to="/signup"> <button type="click">Request a service</button></Link>
       <footer>
        <p>Designed by : Michael Kaburu</p>
        <h3>Contact Us : <span id="icons"> 📞</span> 0796225100</h3>
        <h3>Email : <span id="icons">📧</span> @infor.expert-towing.co.ke</h3>
       </footer>
    </div>
  }
}

export default Home;
