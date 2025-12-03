import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`${5}`)} className="flex justify-between items-center w-[70rem] bg-white shadow-lg p-4 rounded-lg mb-4 ml-5 ">
      {/* Product Info */}
      <div className="flex items-start space-x-5">
        <img
          className="w-32 h-32 object-cover object-top rounded-md"
          src="https://m.media-amazon.com/images/I/71vhAmqLJ5L._AC_UL320_.jpg"
          alt="Product"
        />
        <div className="space-y-1">
          <p className="font-semibold text-gray-800">GENERIC</p>
          <p className="opacity-60 text-sm">Size: M</p>
          <p className="opacity-60 text-sm">Color: Red</p>
        </div>
      </div>

      {/* Price */}
      <div className="text-gray-800 font-semibold">₹199</div>

      {/* Delivery Info */}
      <div className="text-sm text-gray-600 text-right">
         {
        true &&<div> <p className="font-semibold"><AdjustIcon className="text-green-600 mr-2 " sx={{width:"15px", height:"15px" }} /> Delivery On March 03</p>
        <p className="sx"> Your Items has been delevered</p></div>
        
         }
        {
            false &&  <p className="opacity-70">Expected Delivery On March 08</p>


        }

      </div>
     
      

      <div className="text-sm text-gray-600 text-right">
      </div>
    </div>
  );
};

export default OrderCard;
