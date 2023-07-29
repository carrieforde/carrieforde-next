import type { MDXComponents } from "mdx/types";
import { Link, Text } from "components";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <Text variant="title">{children}</Text>,
    ...components,
    a: ({ children, ...props }) => (
      <Link variant="content" color="inherit" {...props}>
        {children}
      </Link>
    ),
  };
}
