import Home from "src/components/screens/home.jsx";
import Content from "src/components/screens/content";
import Footer from "src/components/footer";

const MainPage = () => {
  return (
    <>
      <Home />
      <div className="container">
        <Content />
      </div>
      <Footer />
    </>
  );
};
export default MainPage;
