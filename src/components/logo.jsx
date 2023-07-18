import Image from "next/image";
export default function Logo() {
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
