import Footer from "../components/Footer";
import Header from "../components/Header";
import Items from "../components/Items";

function WelcomePage() {
  return (
    <div className="welcome">
      <Header />
      <Items />
      <div className="welcomeContent">Welcome to Gallery</div>
      <Footer />
    </div>
  );
}

export default WelcomePage;
