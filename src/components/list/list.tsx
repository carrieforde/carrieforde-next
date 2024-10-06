import clsx from "clsx";
import * as React from "react";

import { ListComposition, ListTagName } from "@/components/list/types";
import { forwardRef } from "@/components/utilities/react";

export const List: ListComposition = forwardRef(
  // @TODO: Fix typing with forwardRef and ListComposition
  function List({ as = ListTagName, children, className, ...props }, ref) {
    const classes = clsx("list", className);

    return React.createElement(
      as,
      { ref, className: classes, ...props },
      children,
    );
  },
);

List.Item = forwardRef(function ListItem(
  { as = "li", children, className, ...props },
  ref,
) {
  const classes = clsx("list__item", className);

  return React.createElement(
    as,
    { ref, className: classes, ...props },
    children,
  );
});
