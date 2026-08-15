import butterfly from "../../assets/butterfly.png";

interface ButterflyProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function Butterfly({ className = "", style}: ButterflyProps) {
  return (
    <img
      src={butterfly}
      alt=""
      className={className}
      style={style}
    />
  );
}