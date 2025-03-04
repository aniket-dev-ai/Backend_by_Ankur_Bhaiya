import React from "react";

const chats = [
  { id: 1, sender: "Aniket", message: "Bhai project ka kya scene hai?" },
  { id: 2, sender: "Rahul", message: "UI bana raha hu, ekdum hot 🔥" },
  { id: 3, sender: "Aniket", message: "Review bhej de fir 😎" },
];

const ChatPanel = () => (
  <div>
    <h2 className="text-xl font-bold text-pink-600 mb-4">💬 Conversations</h2>
    <div className="space-y-3">
      {chats.map((chat) => (
        <div key={chat.id} className="bg-white p-3 rounded-lg shadow">
          <strong className="text-pink-500">{chat.sender}:</strong>{" "}
          <span>{chat.message}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ChatPanel;
