import Home from "src/components/screens/home.jsx";
import { Mulish } from 'next/font/google'
const mulish = Mulish({ subsets: ['latin'] })
const MainPage = () => {
  return <div><Home/></div>
};
export default MainPage;