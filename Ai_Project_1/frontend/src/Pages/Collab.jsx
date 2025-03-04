import React, { useState, useEffect, useRef } from "react";
import Split from "react-split";

const Collab = () => {
  const [code, setCode] = useState("// Write your sexy code here 💅");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeTab, setActiveTab] = useState("chat");
  const textareaRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 👀 Handle input change with cursor management
  const handleCodeChange = (e) => {
    const { selectionStart, selectionEnd, value } = e.target;

    setCode(value);

    // Focus reset ke liye trick - cursor ko manually restore karenge
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.selectionStart = selectionStart;
        textareaRef.current.selectionEnd = selectionEnd;
        textareaRef.current.focus();
      }
    }, 0);
  };

  const ChatPanel = () => (
    <div className="p-3 overflow-y-auto space-y-3">
      <h2 className="text-xl font-bold text-pink-600 mb-3">💬 Conversations</h2>
      <div className="bg-white p-3 rounded-lg shadow">Bhai project ka kya scene hai?</div>
      <div className="bg-white p-3 rounded-lg shadow">UI bana raha hu, ekdum hot 🔥</div>
    </div>
  );

  const CodeEditorPanel = () => (
    <div className="p-3 flex flex-col space-y-3">
      <h2 className="text-xl font-bold text-purple-600">👨‍💻 Code Editor</h2>
      <textarea
        ref={textareaRef}
        value={code}
        onChange={handleCodeChange}
        className="w-full h-[90vh] font-mono p-3 bg-black text-green-300 rounded-lg resize-none"
        dir="ltr" // ✅ LTR enforce
      />
    </div>
  );

  const ReviewPanel = () => (
    <div className="p-3 overflow-y-auto space-y-3">
      <h2 className="text-xl font-bold text-blue-600 mb-3">🔍 AI Code Reviews</h2>
      <div className="bg-white p-3 rounded-lg shadow">Function names should be camelCase.</div>
      <div className="bg-white p-3 rounded-lg shadow">Code mast hai, par documentation add kar!</div>
    </div>
  );

  return (
    <div className="h-screen bg-gradient-to-br from-pink-100 to-purple-300">
      {!isMobile ? (
        <Split className="flex h-full" sizes={[30, 40, 30]} minSize={150} gutterSize={8} cursor="col-resize">
          <div className="bg-white/60 backdrop-blur-lg"><ChatPanel /></div>
          <div className="bg-white/60 backdrop-blur-lg"><CodeEditorPanel /></div>
          <div className="bg-white/60 backdrop-blur-lg"><ReviewPanel /></div>
        </Split>
      ) : (
        <div className="h-full flex flex-col">
          <div className="flex justify-around bg-white shadow-md py-2">
            {["chat", "code", "review"].map((tab) => (
              <button
                key={tab}
                className={`font-bold ${activeTab === tab ? "text-purple-600 border-b-2 border-purple-600" : "text-gray-500"}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "chat" ? "💬 Chat" : tab === "code" ? "👨‍💻 Code" : "🔍 Review"}
              </button>
            ))}
          </div>
          <div className="flex-grow overflow-y-auto p-3 bg-white/60 backdrop-blur-lg">
            {activeTab === "chat" && <ChatPanel />}
            {activeTab === "code" && <CodeEditorPanel />}
            {activeTab === "review" && <ReviewPanel />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Collab;
