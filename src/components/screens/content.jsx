import Advantage from "src/components/advantage";
import Card from "src/components/card";
import MyButton from "src/components/button";
import Footer from "src/components/footer";

export default function Content() {
    return (
        <div className={"container"}>
            <h1 className={'text-center text-5xl text-[#6F6953] mt-[80px]'}>Почему именно мы?</h1>
            <svg className={'mx-auto mt-[40px]'} width="57" height="2" viewBox="0 0 57 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="56" height="2" rx="1" fill="#6F6953"/>
            </svg>
            <div className={'flex mt-[40px]'}>
                <Advantage/>
                <Advantage/>
                <Advantage/>
                <Advantage/>
            </div>
            <div className={'mt-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <div className={'mt-10 flex items-center justify-center'}>
                <MyButton/>
            </div>
        </div>
    )
}
