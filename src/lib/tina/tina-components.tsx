import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";

import { Banner } from "@/components/banner/banner";
import { BannerProps } from "@/components/banner/types";
import { Code } from "@/components/code/code";
import { CodeProps } from "@/components/code/types";
import { Image } from "@/components/image/image";
import { ImageProps } from "@/components/image/types";

export const TINA_COMPONENTS = {
  Banner: ({
    children,
    variant,
  }: Pick<BannerProps, "variant"> & {
    children: TinaMarkdownContent | TinaMarkdownContent[];
  }) => (
    <Banner variant={variant}>
      <TinaMarkdown content={children} />
    </Banner>
  ),
  Image: ({ alt, ...props }: ImageProps) => (
    <Image alt={alt ?? ""} {...props} />
  ),
  code_block: (props: CodeProps) => {
    console.log("code block", props);
    return <Code {...props} />;
  },
};
