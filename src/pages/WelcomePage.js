import Footer from "../components/Footer";
import Header from "../components/Header";
import Items from "../components/Items";

function WelcomePage() {
  return (
    <div className="welcome">
      <Header />
      <Items />
      <div className="welcomeContent">
        <p>
          Welcome to <i>Gallery</i>
        </p>
        <p>
          This is a website which depends on <i>Pixabay</i>
        </p>
        <p>for displaying images that are searched</p>
      </div>
      <Footer />
    </div>
  );
}

export default WelcomePage;
