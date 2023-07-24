export interface CharProps {
  size: keyof typeof sizes;
  weight: keyof typeof weights;
}

export const sizes: { [key: string]: string } = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "24px",
  xl: "32px",
};

export const weights: { [key: string]: number } = {
  thin: 100,
  base: 200,
  mid: 500,
  bold: 700,
};
