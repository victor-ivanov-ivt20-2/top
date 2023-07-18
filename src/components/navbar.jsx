import Logo from "src/components/logo.jsx";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className={"flex"}>
      <div className={"basis-1/5 flex"}>
        <Logo />
        <h1 className={"ml-2 mt-2.5"}>Сардаана</h1>
      </div>
      <div className={"basis-1/3"}></div>
      <Link href="#" className={"ml-5 font-bold"}>
        Главная
      </Link>
      <p className={"ml-5"}>О нас</p>
      <p className={"ml-5"}>Каталог</p>
      <p className={"ml-5"}>Собрать букет</p>
      <p className={"ml-5"}>Доставка</p>
    </div>
  );
}
