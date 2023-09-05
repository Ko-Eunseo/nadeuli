import Char from "@/components/atoms/texts/Character";

const Nodata = ({
  text,
  size = "sm",
  weight = "mid",
}: {
  text: string;
  size?: string;
  weight?: string;
}) => {
  return (
    <Char size={size} weight={weight}>
      {text}
    </Char>
  );
};

export default Nodata;
