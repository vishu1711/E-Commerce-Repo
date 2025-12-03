import React from "react";

const SubscribeCard = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h4 className="font-semibold">Stay in Touch</h4>
    <p className="text-sm text-gray-500 mt-2">Subscribe to latest tips on share marketing.</p>
    <div className="mt-3">
      <input className="w-full border rounded px-3 py-2 text-sm" placeholder="Enter email" />
      <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded">Subscribe</button>
    </div>
  </div>
);

export default SubscribeCard;
