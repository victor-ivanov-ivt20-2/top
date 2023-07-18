import Image from "next/image";

export default function Card(props) {
  return (
    <Image
      className="bg-[#fff2e6] rounded-lg m-2"
      src={props.src}
      width={350}
      height={350}
      alt="card image"
    />
  );
}
