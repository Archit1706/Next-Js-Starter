import React from "react";
import { RiCoupon4Fill } from "react-icons/ri";
import Link from "next/link";

type Props = {};

const CampaignCard = (props: Props) => {
  const campainsId = "123213";
  const campainsName = "Hot Promotion";
  const campainsType = "Discount";
  const campainsStatus = "Active";
  const campainsCreatedOn = "12/12/2021";
  const campainsRedemptionLimit = "123";
  const campainsRedeemedQuantity = "0";
  const campainsDiscount = "10%";

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className=" flex justify-between items-center">
        <Link href={`merchant/campaigns/${campainsId}`}>
          {" "}
          <h3 className="text-lg font-bold text-blue-500  ">{campainsName}</h3>
        </Link>
        <div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {campainsStatus}
            </span>
          </label>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <span className="block">Created On : 12/12/2021</span>
      </div>
      <div className="mt-4 space-x-2 flex justify-between items-center">
        <div className="text-gray-600">
          <span className="block">Type : {campainsType}</span>
          <span className="block">Discount : {campainsDiscount}</span>
          <span className="block">Apply to Cart items</span>
        </div>
        <div className="text-gray-600">
          <span className="block">Redemption limit: 123</span>
          <span className="block">Redeemed quantity: 0</span>
          <span className="block">Timeframe: 03/10/2023 13:28:21 </span>
        </div>
        <div className="text-gray-600">
          
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
