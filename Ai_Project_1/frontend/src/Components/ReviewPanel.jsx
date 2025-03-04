import React from "react";

const reviews = [
  { id: 1, reviewer: "System Check", comment: "Function names should be camelCase." },
  { id: 2, reviewer: "Aniket (CEO 😉)", comment: "Code mast hai, par documentation add kar!" },
];

const ReviewPanel = () => (
  <div>
    <h2 className="text-xl font-bold text-blue-600 mb-4">🔍 AI Code Reviews</h2>
    <div className="space-y-3">
      {reviews.map((review) => (
        <div key={review.id} className="bg-white p-3 rounded-lg shadow">
          <strong className="text-blue-500">{review.reviewer}:</strong>{" "}
          <span>{review.comment}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ReviewPanel;
