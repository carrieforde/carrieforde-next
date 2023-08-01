import NextImage, { ImageProps as NextImageProps } from "next/image";
import cn from "classnames";
import s from "./image.module.css";

type ImageProps = NextImageProps & {
  float?: "left" | "right" | "none";
  shape?: "square" | "circle";
};

export const Image: React.FC<ImageProps> = ({ float, shape, ...props }) => {
  const imageClasses = cn(s.image, {
    [s.right]: float === "right",
    [s.circle]: shape === "circle",
  });

  return <NextImage {...props} className={imageClasses} />;
};
