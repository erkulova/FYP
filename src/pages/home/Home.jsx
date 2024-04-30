import Feedbacks from "../../components/landing/Feedbacks";
import AboutUs from "../../components/landing/AboutUs";
import Collage from "../../components/landing/Collage";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Intro from "../../components/landing/Intro";

const Home = () => (
  <>
    <Header />
    <Intro />
    <AboutUs />
    <Collage />
    <Feedbacks />
    <Footer />
  </>
);

export default Home;
