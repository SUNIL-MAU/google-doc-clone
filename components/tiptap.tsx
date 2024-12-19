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

const Tiptap = () => {
  const editor = useEditor({
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
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      Image,
      ImageResize,
    ],
    content: `
    <p>This is a basic example of implementing images. Drag to re-order.</p>
    <img src="https://placehold.co/800x400" />
    <img src="https://placehold.co/800x400/6A00F5/white" />
  `,
  });

  return (
    <div className="size-full   overflow-x-auto bg-[#F9FBFD] px-4 print:px-0 print:bg-white print:overflow-visible">
      <div className="min-w-max flex justify-center w-[816px] spy-4 print:py-0  mx-auto print:w-full print:min-w-0'>">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Tiptap;
