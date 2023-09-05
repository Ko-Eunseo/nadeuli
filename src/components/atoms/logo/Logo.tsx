import logo from "@/../public/assets/logo.svg";
import Image from "next/image";
import { Margin } from "../styles";

const Logo = () => {
  return (
    <Margin>
      <Image src={logo} alt="nadeuli's logo" width="150" />
    </Margin>
  );
};

export default Logo;
