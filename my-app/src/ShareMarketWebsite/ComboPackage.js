// import React from "react";
// import FeatureList from "../ShareMarketWebsite/FeatureList";
// import PackageCard from "../ShareMarketWebsite/PackageCard";
// import ContactCard from "../ShareMarketWebsite/ContactCard";
// import SubscribeCard from "../ShareMarketWebsite/SubscribeCard";


// const ComboPackage = () => {
//   return (
//     <main className="max-w-6xl mx-auto px-4 py-10">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left Side */}
//         <section className="lg:col-span-2 space-y-6">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-semibold">COMBO PACKAGE</h2>
//             <p className="text-sm text-gray-500 mt-2">
//               Choose from our curated combo packages — Nifty and Bank Nifty segments, call-based advisory delivered through our application.
//             </p>
//           </div>
//           <FeatureList />
//         </section>

//         {/* Right Side Packages */}
//         <aside className="space-y-4">
//           <PackageCard
//             title="Premium"
//             subtitle="For 6 Months"
//             price="75,000"
//             gst="Inclusive of GST"
//             features={[
//               "Segments: Nifty and Bank Nifty",
//               "Up to 3 Calls in a Week",
//               "Proper Follow Ups and News Update",
//               "Calls via our Application",
//               "Market Hour Customer Support",
//             ]}
//           />
//           <PackageCard
//             title="Basic"
//             subtitle="For 2 Months"
//             price="1,99,999"
//             gst="+GST"
//             features={[
//               "Segments: Nifty and Bank Nifty",
//               "Up to 3 Calls in a Week",
//               "Service Expiry: 1 Year or Lifetime Full Service",
//               "Entry Time: Max 1 Minute to Buy Any Stock",
//             ]}
//           />
//           <PackageCard
//             title="Standard"
//             subtitle="For 3 Months"
//             price="2,49,999"
//             gst="+GST"
//             features={[
//               "Segments: Nifty and Bank Nifty",
//               "Up to 3 Calls in a Week",
//               "Service Expiry: 1 Year or Lifetime Full Service",
//             ]}
//           />
//         </aside>
//       </div>

//       {/* Popular + Contact */}
//       <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="lg:col-span-2">
//           <PackageCard
//             title="Popular Premium"
//             subtitle="For 12 Months"
//             price="2,99,999"
//             gst="+GST"
//             popular={true}
//             features={[
//               "Segments: Nifty and Bank Nifty",
//               "Up to 3 Calls in a Week",
//               "Proper Follow Ups and News Update",
//               "Entry Time: Max 2 Minutes to Buy Any Stock",
//             ]}
//           />
//         </div>
//         <aside className="space-y-4">
//           <ContactCard />
//           <SubscribeCard />
//         </aside>
//       </div>
//     </main>
//   );
// };

// export default ComboPackage;

import React from "react";
import { CheckCircle } from "lucide-react";

export default function ComboPackage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <img
              src="https://stockwins.in/wp-content/uploads/2023/05/stockwins-logo.png"
              alt="Stockwins Logo"
              className="h-10"
            /> */}
            <h1 className="text-xl font-bold text-gray-800">STOCKWINS</h1>
          </div>
          <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">Service</a>
            <a href="#" className="hover:text-blue-600">Compliance Score</a>
            <a href="#" className="hover:text-blue-600">Expert Advice</a>
            <a href="#" className="hover:text-blue-600">Bank Details</a>
            <a href="#" className="hover:text-blue-600">Contact Us</a>
            <a href="#" className="hover:text-blue-600">User Consent</a>
          </nav>
        </div>
      </header>

      {/* PREMIUM CARD SECTION */}
      <section className="flex flex-col items-center justify-center py-16 px-4">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-md text-center">
          <div className="bg-blue-900 text-white py-4 rounded-t-2xl">
            <h2 className="text-2xl font-semibold">Premium</h2>
            <p className="text-sm opacity-80">For 6 Months</p>
          </div>

          <div className="bg-gray-100 text-gray-900 py-6">
            <p className="text-3xl font-bold">₹75,000</p>
            <p className="text-sm text-gray-600">Inclusive of GST</p>
          </div>

          <div className="text-left px-6 py-6 space-y-4">
            <Feature text="Segments: Nifty and Bank Nifty" />
            <Feature text="How Many Calls: Up to 3 Calls in a Week (Only Jackpot Calls will be provided)" />
            <Feature text="Follow Up: Proper Follow Ups and News Update" />
            <Feature text="Platform: Call Will be Provided through Our Application" />
            <Feature text="Support: Market Hour Customer Support" />
            <Feature text="Form: With Entry Level, Target and SL" />
            <Feature text="Quantity: Quantity Decided by You" />
          </div>
        </div>
      </section>
    </div>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-start space-x-2">
      <CheckCircle className="text-blue-600 w-5 h-5 flex-shrink-0 mt-0.5" />
      <p className="text-gray-700 text-sm">{text}</p>
    </div>
  );
}
