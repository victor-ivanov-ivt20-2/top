import Home from "src/components/screens/home.jsx";
import { Mulish } from 'next/font/google'
import Content from "src/components/screens/content";
import Footer from "src/components/footer";
const mulish = Mulish({ subsets: ['latin'] })
const MainPage = () => {
  return (
    <div>
        <Home/>
        <Content/>
        <Footer/>
    </div>
  )
};
export default MainPage;