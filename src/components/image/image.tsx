import NextImage from "next/image";

import { Box } from "@/components/box/box";
import { ImageProps } from "@/components/image/types";

export const Image: React.FC<ImageProps> = ({
  alt,
  src,
  height,
  width,
  caption,
}) => {
  return (
    <Box as="figure">
      <NextImage src={src} alt={alt} width={width} height={height} />
      {caption && <Box as="figcaption">{caption}</Box>}
    </Box>
  );
};
