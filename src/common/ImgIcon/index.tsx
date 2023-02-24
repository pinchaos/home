import { ImgProps } from "../types";

export const ImgIcon = ({ src, width, height, type }: ImgProps) => {
  var source = type === "svg" ? `./img/svg/${src}` : `./img/png/${src}`;
  return <img src={source} alt={src} width={width} height={height} />;
};
