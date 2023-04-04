import Header from "../components/Header";
import Footer from "../components/Footer";
import Burger from "../components/Burger";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="aboutBody">je suis le about</div>
      <Burger />
      <Footer />
    </div>
  );
}
