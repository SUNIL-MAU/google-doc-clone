import Link from "next/link";
import React from "react";

const documents = () => {
  return (
    <div>
      click <Link href="/documents/123">here</Link> to move to the doc
    </div>
  );
};

export default documents;
