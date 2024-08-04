import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Events from "./components/Events/Events";

import "./App.css";
import Donate from "./components/Donate/Donate";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="banner-container">
        <Navbar />
        <Banner />
      </section>
      <Events />
      <Donate />
      <Footer />
    </>
  );
}

export default App;
