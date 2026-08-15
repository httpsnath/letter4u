import flower from "../../assets/flower.png";

interface FlowerProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function Flower({ className = "", style}: FlowerProps) {
  return (
    <img
      src={flower}
      alt=""
      className={className}
      style={style}
    />
  );
}