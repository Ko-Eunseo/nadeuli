import { blackGothic } from "@/app/font";
import Char from "@/components/atoms/texts/Character";

type Main = "main";
type Sub = "sub";
type Content = "content";

interface TitleType {
  type: Main | Sub | Content;
  text: string;
}
const Title = ({ type, text }: TitleType) => {
  const size = type === "main" ? "display" : "md";
  const weight = type === "main" ? "" : "thin";
  const className = type === "main" ? blackGothic.className : "";

  return (
    <Char size={size} weight={weight} font={className}>
      {text}
    </Char>
  );
};

export default Title;
