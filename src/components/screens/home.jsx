import Navbar from "src/components/navbar.jsx";
export default function Home() {
  return (
    <div className="background h-[780px] text-white text-lg">
      <div className="h-full pt-10">
        <Navbar />
        <div className="mt-[256px]">
          <h1 className="text-center text-[48px] font-bold">
            Салон цветов Сардаана
          </h1>
          <p className="text-center text-[18px] mt-5">
            Лучшие цветы на нашем сайте с доставкой по Республике Саха (Якутия)
          </p>
        </div>
      </div>
    </div>
  );
}
