import { CharProps, sizes, weights } from "@/styles/CharStyle";
import { StyledChar } from "./styledChar";

const Char = ({
  size,
  weight,
  font,
  children,
}: CharProps & { children: React.ReactNode }) => {
  return (
    <>
      <StyledChar
        fontSize={sizes[size]}
        fontWeight={weights[weight]}
        className={font}
      >
        {children}
      </StyledChar>
    </>
  );
};

export default Char;
