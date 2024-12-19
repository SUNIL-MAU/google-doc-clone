import Editor from "@/components/editor";
import Toolbar from "@/components/toolbar";

import React from "react";

const page = async () => {
  return (
    <div className="min-h-screen bg-[#FAFBFD ]">
      <Toolbar />
      <Editor />
    </div>
  );
};

export default page;
