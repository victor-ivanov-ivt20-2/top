import Circle from "./icons/circle";

export default function Advantage(props) {
  return (
    <div className="basis-1/4">
      <Circle />
      <h1 className="text-[#6F6953] text-center text-lg mt-5">{props.title}</h1>
      <p className="text-[#B4B4B4] text-center text-lg leading-5 mt-[20px] w-80 mx-auto">
        {props.text}
      </p>
    </div>
  );
}
