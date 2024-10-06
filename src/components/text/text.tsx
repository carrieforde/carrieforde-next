import clsx from "clsx";
import * as React from "react";

import s from "@/components/text/text.module.css";
import { forwardRef } from "@/components/utilities/react";
import { Props } from "@/components/utilities/types";

const TagName = "p" satisfies React.ElementType;
type TagName = typeof TagName;

type TextVariant =
  | "title"
  | "subtitle"
  | "body1"
  | "body2"
  | "overline"
  | "finePrint";

type TextOptions<T extends React.ElementType = TagName> = {
  as?: T;
  variant?: TextVariant;
};

export type TextProps<T extends React.ElementType = TagName> = Props<
  T,
  TextOptions<T>
>;

export const Text = forwardRef(function Text(
  { as = TagName, children, className, variant = "body", ...props },
  ref,
) {
  const tagName = variant === "title" && !as ? "h1" : (as ?? "p");
  const classes = clsx(
    s.text,
    s[variant],
    "text",
    variant && `text--${variant}`,
    className,
  );

  return React.createElement(
    tagName,
    {
      ref,
      className: classes,
      ...props,
    },
    children,
  );
});
