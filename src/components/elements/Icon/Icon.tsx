import sprite from "../../../assets/sprite.svg";

interface IconProps {
  iconId: string;
  height: string;
  width: string;
}

const Icon = ({ iconId, height, width }: IconProps) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#${iconId}`}></use>
    </svg>
  );
};
export default Icon;
