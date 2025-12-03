import React from "react";

const FeatureList = () => {
  const features = [
    "Segments: Nifty and Bank Nifty",
    "Up to 3 Calls in a Week",
    "Proper Follow Ups and News Update",
    "Calls via our Application",
    "Market hour customer support",
    "Entry, Target and SL provided",
    "Accuracy: Up to 95%",
    "Risk: Moderate",
    "Risk Rewards: 1:3, 1:4 and 1:5"
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Package Details</h3>
      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
        {features.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
};

export default FeatureList;
