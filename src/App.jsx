import "./App.css";
import Banner from "./components/Banner/Banner";
import Blog from "./components/Blog/Blog";
import BlogNav from "./components/Blog/BlogNav";
import Brand from "./components/Brand/Brand";
import CategoryNav from "./components/Category/CategoryNav";
import Category_1 from "./components/Category/Category_1";
import Category_2 from "./components/Category/Category_2";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Newletter from "./components/Newletter/Newletter";
import Nav from "./components/Popular/Nav";
import Popular from "./components/Popular/Popular";
import Service from "./components/Services/Service";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Nav />
      <Popular />
      <Banner />
      <CategoryNav />
      <Category_1 />
      <Category_2 />
      <Service />
      <BlogNav />
      <Blog />
      <Brand />
      <Newletter />
      <Footer />
    </div>
  );
}

export default App;
