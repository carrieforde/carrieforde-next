import { defineConfig, Template, TinaField } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

const templates: Template[] = [
  {
    name: "Banner",
    label: "Banner",
    fields: [
      {
        name: "children",
        label: "Content",
        type: "rich-text",
      },
      {
        name: "variant",
        label: "Variant",
        type: "string",
        options: ["info", "warning", "error", "success"],
      },
    ],
  },
  {
    name: "Image",
    label: "Custom Image",
    fields: [
      {
        name: "src",
        label: "Image",
        type: "image",
      },
      {
        name: "alt",
        label: "Alt Text",
        type: "string",
      },
      {
        name: "caption",
        label: "Caption",
        type: "string",
      },
      {
        name: "width",
        label: "Width",
        type: "number",
      },
      {
        name: "height",
        label: "Height",
        type: "number",
      },
      {
        name: "float",
        label: "Float",
        type: "string",
        options: ["left", "right", "none"],
      },
      {
        name: "shape",
        label: "Shape",
        type: "string",
        options: ["square", "circle"],
      },
    ],
  },
];

const SHARED_FIELDS: TinaField[] = [
  {
    type: "string",
    name: "title",
    label: "Title",
    isTitle: true,
    required: true,
  },
  {
    type: "string",
    name: "description",
    label: "Description",
    list: true,
  },
  {
    type: "rich-text",
    name: "body",
    label: "Body",
    isBody: true,
    required: true,
    templates,
  },
];

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        fields: SHARED_FIELDS,
      },
      {
        name: "post",
        label: "Posts",
        format: "mdx",
        path: "content/posts",
        fields: [
          ...SHARED_FIELDS,
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "datetime",
            name: "updated",
            label: "Updated",
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["Development", "JavaScript", "WordPress"],
          },
          {
            type: "boolean",
            name: "showToc",
            label: "Show Table of Contents",
          },
        ],
        // ui: {
        //   // This is an DEMO router. You can remove this to fit your site
        //   router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        // },
      },
    ],
  },
});
