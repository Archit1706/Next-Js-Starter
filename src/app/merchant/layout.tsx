"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
export default function Layout({ children }) {
    const [userImage, setUserImage] = useState(
        "https://www.cnet.com/a/img/resize/4bbb5d8eeffea0beb519f4f5a21192068d133c34/hub/2021/09/10/56cb167f-7bff-4076-9b00-d415067f5477/screenshot-2021-09-10-at-5-44-32-pm.png?auto=webp&fit=crop&height=900&width=1200"
      );
      const [userName, setUserName] = useState("");
      const [userEmail, setUserEmail] = useState("");
      const [active, setActive] = useState(1);
      const [postCount, setPostCount] = useState(0);
      const path = usePathname();
      useEffect(() => {
        const usrImg = localStorage.getItem("userImage");
        if (usrImg?.length > 0) {
          setUserImage(usrImg);
        }
        const usrName = localStorage.getItem("userName");
        if (usrName?.length > 0) {
          setUserName(usrName);
        }
        const usrEmail = localStorage.getItem("userEmail");
        if (usrName?.length > 0) {
          setUserEmail(usrEmail);
        }
    
        if (path.includes("campains")) {
          setActive(2);
        }
        if (path.includes("vouchers")) {
          setActive(1);
        }
      }, []);
    
      const activeStyle =
        "text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500";
  return (
    <>
 <div className="max-w-full mx-10 flex flex-col justify-center items-center p-2">
     

      <div className="mt-12 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2">
            <Link
              onClick={() => setActive(1)}
              href="/merchant/coupons"
              className={`inline-flex p-4 border-b-2 rounded-t-lg group ${
                active == 1
                  ? activeStyle
                  : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }`}
            >
            
              <span>Vouchers</span>
            </Link>
          </li>
          <li className="mr-2">
            <Link
              onClick={() => setActive(2)}
              href="/merchant/campaigns"
              className={`inline-flex p-4 border-b-2 rounded-t-lg group ${
                active == 2
                  ? activeStyle
                  : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }`}
              aria-current="page"
            >
             Campaigns
            </Link>
          </li>
        </ul>
        
      </div>
      <div className="w-[100%]">

      {children}
    
      </div>
    </div>
    </>
  )
}