export default function Advantage(props) {
  return (
    <div className={"basis-1/4"}>
      <svg
        className={"mx-auto"}
        width="80"
        height="79"
        viewBox="0 0 80 79"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="39.5" r="39.5" fill="#EFEFEF" />
      </svg>
      <h1 className={"text-[#6F6953] text-center text-lg mt-5"}>
        {props.title}
      </h1>
      <p
        className={
          "text-[#B4B4B4] text-center text-lg leading-5 mt-[20px] w-80 mx-auto"
        }
      >
        {props.text}
      </p>
    </div>
  );
}
