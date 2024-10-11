import { Box } from "@/components/box/box";
import {
  PageComposition,
  PageDescriptionProps,
  PageProps,
  PageTitleProps,
} from "@/components/page/types";
import { Text } from "@/components/text/text";

const PageComponent: React.FC<PageProps> = ({ children }) => {
  return <Box as="main">{children}</Box>;
};

const Title: React.FC<PageTitleProps> = ({ children }) => {
  return (
    <Text as="h1" variant="title">
      {children}
    </Text>
  );
};

const Description: React.FC<PageDescriptionProps> = ({ description }) => {
  if (!description) return null;

  return (
    <Text as="p" variant="subtitle">
      {description.join(" ")}
    </Text>
  );
};

export const Page: PageComposition = Object.assign(PageComponent, {
  Title,
  Description,
});
