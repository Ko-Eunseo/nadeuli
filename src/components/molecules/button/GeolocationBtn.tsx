import { BiCurrentLocation } from "react-icons/bi";
import IconBtn from "../../atoms/buttons/iconBtn/IconBtn";

const GeolocationBtn = ({ onClick }: { onClick: () => void }) => {
  return <IconBtn Icon={BiCurrentLocation} onClick={onClick} />;
};

export default GeolocationBtn;
