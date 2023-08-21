import logo from "@/../public/assets/logo.svg";
import Image from "next/image";
import { Margin8 } from "../styles";

const Logo = () => {
  return (
    <Margin8>
      <Image src={logo} alt="nadeuli's logo" width="150" />
    </Margin8>
  );
};

export default Logo;
