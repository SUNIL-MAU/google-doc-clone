import { Extension } from "@tiptap/react";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    lineheight: {
      setLineHeight: (lineHeight: string) => ReturnType;
      unsetLineHeight: () => ReturnType;
    };
  }
}

export const LineHeightExtension = Extension.create({
  name: "lineHeight",
  addOptions() {
    return {
      types: ["paragraph", "heading"],
      defaultLineHeight: "normal ",
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          lineHeight: {
            default: this.options.defaultLineHeight,
            parseHTML: (element) =>
              element.style.lineHeight || this.options.defaultLineHeight,
            renderHTML: (attributes) => {
              if (!attributes.lineHeight) {
                return {};
              } else {
                return {
                  style: `line-height: ${attributes.lineHeight}`,
                };
              }
            },
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setLineHeight:
        (lineHeight: string) =>
        ({ chain }) => {
          return chain()
            .setMark("textStyle", { lineHeight }) // Apply the `lineHeight` attribute
            .setNode("paragraph", { lineHeight }) // Adjust it for block types like paragraphs or headings
            .run();
        },
      unsetLineHeight:
        () =>
        ({ chain }) => {
          return chain()
            .setMark("textStyle", { lineHeight: null }) // Remove `lineHeight` attribute
            .setNode("paragraph", { lineHeight: null }) // Reset for block types
            .run();
        },
    };
  },
});
