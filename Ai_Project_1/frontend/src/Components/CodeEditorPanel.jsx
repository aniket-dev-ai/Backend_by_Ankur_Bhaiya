import React, { useState } from "react";

const CodeEditorPanel = () => {
  const [code, setCode] = useState("// Write your sexy code here 💅");

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-xl font-bold text-purple-600 mb-4">👨‍💻 Code Editor</h2>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full flex-grow font-mono p-3 bg-black text-green-300 rounded-lg resize-none"
      />
    </div>
  );
};

export default CodeEditorPanel;
