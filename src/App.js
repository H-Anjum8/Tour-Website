// import './App.css';
import ContactHeader from "./Components/ContactHeader";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Offers from "./Components/Offers";
import Plan from "./Components/Plan";
import Rooms from "./Components/Rooms";
import "./index.css";

function App() {
  return (
    <>
      
      <NavBar />
      <Hero />
      <ContactHeader />
      <Offers />
      <Plan />
      <Rooms />
      <Faq/>
      <Footer />
    </>
  );
}

export default App;
