import { BiCurrentLocation } from "react-icons/bi";
import IconBtn from "../../atoms/buttons/iconBtn/IconBtn";
import { IconContext } from "react-icons";

const GeolocationBtn = ({
  onClick,
  iconSize,
}: {
  onClick: () => void;
  iconSize: string;
}) => {
  return (
    <IconContext.Provider value={{ size: iconSize }}>
      <IconBtn Icon={BiCurrentLocation} onClick={onClick} />
    </IconContext.Provider>
  );
};

export default GeolocationBtn;
