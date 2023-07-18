export default function Circle(props) {
  const { width = 80, height = 80, fill = "#EFEFEF" } = props;

  return (
    <svg
      className="mx-auto"
      width={width}
      height={height}
      viewBox="0 0 80 79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="40" cy="39.5" r="39.5" fill={fill} />
    </svg>
  );
}
