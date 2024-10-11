import * as React from "react";

import type { Preview } from "@storybook/react";
import {
  ibmPlexMono,
  libreFranklin,
} from "../src/components/theme/fonts/fonts";

import "../src/components/theme/theme.css";
import "../src/styles/global.css";

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  React.useEffect(() => {
    document.documentElement.classList.add(libreFranklin.variable);
    document.documentElement.classList.add(ibmPlexMono.variable);

    return () => {
      document.documentElement.classList.remove(libreFranklin.variable);
      document.documentElement.classList.remove(ibmPlexMono.variable);
    };
  }, []);

  return <>{children}</>;
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [(Story) => <Wrapper>{Story()}</Wrapper>],
};

export default preview;
