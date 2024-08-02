import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Events from "./components/Events/Events";
import Donation from "./components/Donation/Donation";

import "./App.css";

function App() {
  return (
    <>
      <section className="banner-container">
        <Navbar />
        <Banner />
      </section>

      <section className="events-container">
        <Events />
      </section>

      <section className="donation-container">
        <Donation />
      </section>
      
    </>
  );
}

export default App;
