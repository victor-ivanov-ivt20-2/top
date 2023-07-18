import Navbar from 'src/components/navbar.jsx';
export default function Home() {
    return (
        <div className={"background h-[780px] text-white text-lg relative"}>
            <div className="container h-full pt-10">
                <Navbar/>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className='text-[48px]'>Салон цветов Сардаана</h1>
                    <p className="text-center w-full text-[18px] mt-5">Лучшие цветы на нашем сайте с доставкой по Республике Саха (Якутия)</p>
                </div>
            </div>
        </div>
    )
}
