import { Mulish } from 'next/font/google'
import Image from 'next/image'
const mulish = Mulish({ subsets: ['latin'] })
export function Header() {
    return (
        <div className={"background h-[780px] text-white text-lg relative"}>
            <div className="container h-full pt-10">
                <div className={'flex'}>
                    <div className={'basis-1/5 flex'}>
                        <Logo/>
                        <h1 className={'ml-2 mt-2.5'}>Сардаана</h1>
                    </div>
                    <div className={'basis-1/3'}>
                    </div>
                    <p className={'ml-5'}>Главная</p>
                    <p className={'ml-5'}>О нас</p>
                    <p className={'ml-5'}>Каталог</p>
                    <p className={'ml-5'}>Собрать букет</p>
                    <p className={'ml-5'}>Доставка</p>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className='text-[48px]'>Салон цветов Сардаана</h1>
                    <p className="text-center w-full text-[18px] mt-5">Лучшие цветы на нашем сайте с доставкой по Республике Саха (Якутия)</p>
                </div>
            </div>
        </div>
    )
}
function Logo() {
    return (
        <Image
            src="/static/logo.svg"
            width={38}
            height={32}
            alt="Picture of the author"
            className={'Logo'}
        />
    )
}