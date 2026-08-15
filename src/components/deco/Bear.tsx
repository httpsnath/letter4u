import bear from "../../assets/bear.png";

interface BearProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function Bear({ className = "", style}: BearProps) {
  return (
    <img
      src={bear}
      alt=""
      className={className}
      style={style}
    />
  );
}