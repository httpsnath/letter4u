import flower2 from "../../assets/flower2.png";

interface Flower2Props {
  className?: string;
  style?: React.CSSProperties;
}

export default function Flower2({ className = "", style }: Flower2Props) {
  return (
    <img
      src={flower2}
      alt=""
      className={className}
      style={style}
    />
  );
}