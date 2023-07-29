import "../src/styles/styles.css";
import type { Preview } from "@storybook/react";
import * as React from 'react';
import {libreFranklin, ibmPlexMono} from '../src/app/_theme/fonts'

const Wrapper: React.FC<React.PropsWithChildren> = ({children}) => {
  React.useEffect(() => {
    document.documentElement.classList.add(libreFranklin.variable);
    document.documentElement.classList.add(ibmPlexMono.variable);
  }, [])

  return <>{children}</>
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [(Story) => <Wrapper><Story /></Wrapper>]
};

export default preview;
