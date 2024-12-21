"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Image from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";
import { useEditorStore } from "@/store/use-editor-store";
import Underline from "@tiptap/extension-underline";
import FontFamily from "@tiptap/extension-font-family";
import TextStyle from "@tiptap/extension-text-style";
import Highlight from "@tiptap/extension-highlight";
import { Color } from "@tiptap/extension-color";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import { FontSizeExtension } from "@/extensions/font-size";
import { LineHeightExtension } from "@/extensions/line-height";

const Editor = () => {
  const { setEditor } = useEditorStore();
  const editor = useEditor({
    onCreate: ({ editor }) => setEditor(editor),
    onDestroy: () => setEditor(null),
    onUpdate: ({ editor }) => setEditor(editor),
    onBlur: ({ editor }) => setEditor(editor),
    onSelectionUpdate: ({ editor }) => setEditor(editor),
    onFocus: ({ editor }) => setEditor(editor),
    onTransaction: ({ editor }) => setEditor(editor),
    onContentError: ({ editor }) => setEditor(editor),

    editorProps: {
      attributes: {
        style: "padding-left:56px;padding-right:56px",
        class:
          "focus:outline-none print:border-0 bg-white border-[#C7C7C7] shadow-md rounded-md flex flex-col min-h-[1054px] border border-[#C7C7C7] cursor-text  flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 ",
      },
    },
    extensions: [
      StarterKit,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      Image,
      ImageResize,
      Underline,
      FontFamily,
      TextStyle,
      Highlight.configure({ multicolor: true }),
      Color,
      Link.configure({
        openOnClick: true,
        autolink: true,
        defaultProtocol: "https",
      }),
      FontSizeExtension,
      LineHeightExtension.configure({
        types: ["paragraph", "heading"],
        defaultLineHeight: "normal",
      }),
    ],
    content: `
    <p>This isn’t highlighted.</s></p>
    <p><mark>But that one is.</mark></p>
    <p><mark style="background-color: red;">And this is highlighted too, but in a different color.</mark></p>
    <p><mark data-color="#ffa8a8">And this one has a data attribute.</mark></p>
  `,
    immediatelyRender: false,
    shouldRerenderOnTransaction: false,
  });

  return (
    <div className="size-full   overflow-x-auto bg-[#F9FBFD] px-4 print:px-0 print:bg-white print:overflow-visible">
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0  mx-auto print:w-full print:min-w-0'>">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
