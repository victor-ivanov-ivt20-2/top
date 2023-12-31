import Logo from "src/components/logo";

export default function Footer() {
  return (
    <footer className="w-full h-[500px] pt-20 pb-20 pl-10 pr-10 bg-[#6F6953] text-white mx-auto mt-10">
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between text-[32px]">
          <div>
            <h1 className="font-bold">О сервисе</h1>
            <p className="mt-[16px]">О нас</p>
            <p className="mt-[16px]">Контакты</p>
            <p className="mt-[16px]">Гарантия качества</p>
            <p className="text-[35px] mt-[87.5px]">
              Designed and Developed by Anela Evseeva
            </p>
          </div>
          <div>
            <h1 className="font-bold">Вопросы</h1>
            <p className="mt-[16px]">Доставка</p>
            <p className="mt-[16px]">Оплата</p>
            <p className="mt-[16px]">скидки</p>
            <div className="flex mt-[87.5px]">
              <Logo />
              <p className="text-[35px] ml-5 font-bold">Сардаана</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
