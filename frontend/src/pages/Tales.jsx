import Header from "../components/Header";
import Footer from "../components/Footer";
import Burger from "../components/Burger";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="talesBody">je suis le tales</div>
      <Burger />
      <Footer />
    </div>
  );
}
