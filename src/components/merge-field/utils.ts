import { get } from "lodash";

import { ExtractedMergeField } from "@/components/merge-field/types";

export const MERGE_FIELD_REGEX = new RegExp(/{{[\w.]+(\|.+)?}}/g);

export function searchContent(text: string): boolean {
  return text.search(MERGE_FIELD_REGEX) >= 0;
}

export function extractMergeField(text: string): ExtractedMergeField {
  const start = text.indexOf("{{");
  const end = text.indexOf("}}");
  const field = text.substring(start + 2, end);
  const pipe = field.indexOf("|");
  const fieldName = field.includes("|") ? field.substring(0, pipe) : field;
  const defaultValue = field.includes("|")
    ? field.substring(pipe + 1, field.length)
    : undefined;

  return {
    search: `{{${field}}}`,
    fieldName,
    defaultValue,
  };
}

export function processMergeField(
  text: string,
  data: Record<string, any>,
): string {
  const { search, fieldName, defaultValue } = extractMergeField(text);
  const value = get(data, fieldName, defaultValue);

  if (!search || !fieldName) {
    return text;
  }

  if (!value) {
    return text
      .replace(search, "")
      .replace(/\s{2,}/g, " ")
      .trim();
  }

  return text.replace(search, value);
}
