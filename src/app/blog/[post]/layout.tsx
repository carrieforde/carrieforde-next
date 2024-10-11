/* eslint-disable check-file/folder-naming-convention */
"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

import { MergeFieldProvider } from "@/components/merge-field/merge-field-provider";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const search = useSearchParams();

  const data = useMemo(
    () =>
      search
        .entries()
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}),
    [search],
  );

  return <MergeFieldProvider data={data}>{children}</MergeFieldProvider>;
}
