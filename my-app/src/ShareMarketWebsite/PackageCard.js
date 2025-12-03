import React from "react";

const PackageCard = ({ title, subtitle, price, gst, features, popular }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md relative">
      {popular && <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">Popular</span>}
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <div className="text-right">
          <div className="font-bold text-xl">₹ {price}</div>
          <div className="text-xs text-gray-500">{gst}</div>
        </div>
      </div>
      <ul className="mt-4 text-sm text-gray-700 list-disc pl-5 space-y-1">
        {features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <div className="mt-4">
        <button className="w-full bg-indigo-600 text-white py-2 rounded">Buy Now</button>
      </div>
    </div>
  );
};

export default PackageCard;
