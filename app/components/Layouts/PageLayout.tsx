'use client';
import { useState } from "react";
import { usePathname } from "next/navigation";
import DropDown from "../DropDown";
import Image from "next/image";
import StateAnalyticsComponent from "../toggleComponents/StateAnalyticsComponent";
import AllStatesComponent from "../toggleComponents/AllStatesComponent";
import AllAreaComponent from "../toggleComponents/AllAreaComponent";
import AreaAnalytics from "../toggleComponents/AreaAnalytics";
import ZoneOverview from "../toggleComponents/zoneOverview";
import LandmarkOverview from "../toggleComponents/landmarkOverview";
import RequestOverview from "../toggleComponents/requestOverview";
import StaffOverview from "../toggleComponents/staffOverview";
import ClientsOverview from "../toggleComponents/clientsOverview";
import QueriesOverview from "../toggleComponents/queriesOverview";
import ContentOverview from "../toggleComponents/contentOverview";
import BillPaymentsComponent from "../toggleComponents/BillPaymentsComponent";
import EcommerceAnalytics from "../toggleComponents/ecommerceAnalytics";
import ZoneAnalytics from "../toggleComponents/zoneAnalytics";
import LandmarkAnalytics from "../toggleComponents/landmarkAnalytics";
import LandmarkComponent from "../toggleComponents/landmark";
import Pickup from "../toggleComponents/pickup";
import DropOff from "../toggleComponents/dropOff";
import Orders from "../toggleComponents/orders";
import Products from "../toggleComponents/products";
import Shipments from "../toggleComponents/shipments";
import Restock from "../toggleComponents/restock";


interface PageLayoutProps {
  title: string;
  dropdownData: { [key: string]: any[] };
  imgSrc: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, dropdownData, imgSrc }) => {
  const [selectedPage, setSelectedPage] = useState(Object.keys(dropdownData)[0]);
  const pathname = usePathname();

  const renderComponentForTab = (tabKey: string) => {
    switch (tabKey) {
      case "All States":
        return <AllStatesComponent />;
      case "All Area":
        return <AllAreaComponent />;
      case "Landmarks":
        return <LandmarkComponent />;
      case "Pickup":
        return <Pickup />;
      case "Dropoff":
        return <DropOff />;
      case "Bill & Payments":
        return <BillPaymentsComponent />;
      case "Products":
        return <Products />;
      case "Orders":
        return <Orders />;
      case "Shipments":
        return <Shipments />;
      case "Restock":
        return <Restock />;
      case "Analytics":
        if (pathname.includes("/areas")) {
          return <AreaAnalytics />;
        } else if (pathname.includes("/states")) {
          return <StateAnalyticsComponent />;
        } else if (pathname.includes("/zone")) {
          return <ZoneAnalytics />;
        } else if (pathname.includes("/ecommerce")) {
          return <EcommerceAnalytics />;}
        else if (pathname.includes("/zonal_admin/landmark")) {
          return <LandmarkAnalytics />;
        }
        break;
      case "Overview":
        if (pathname.includes("/zone")) {
          return <ZoneOverview />;
        } else if (pathname.includes("/request")) {
          return <RequestOverview />;
        } else if (pathname.includes("/staff")) {
          return <StaffOverview />;
        } else if (pathname.includes("/clients")) {
          return <ClientsOverview />;
        } else if (pathname.includes("/queries")) {
          return <QueriesOverview />;
        } else if (pathname.includes("/content")) {
          return <ContentOverview />;
        }else if (pathname.includes("/zonal_admin/landmark")) {
          return <LandmarkOverview />;
        }
        
        break;

      default:
        return null;
    }
  };

  return (
    <div className="p-4 pl-0">
      <div className="border-b-2">
        <div className="flex items-center gap-[2vw]">
          <p className="text-[1.4vw] ml-4 font-[400] text-nowrap">{title}</p>
          <div className="h-fit w-full">
            {dropdownData[selectedPage]?.dropdownOptions && Array.isArray(dropdownData[selectedPage].dropdownOptions) && (
              <DropDown areasToDisplay={dropdownData[selectedPage].dropdownOptions} />
            )}
          </div>
        </div>

        {/* This is the section that handles the new entity button */}
        <div className="justify-end flex">
          {dropdownData[selectedPage]?.newEntityLabel ? (
            <button
              onClick={dropdownData[selectedPage].openModal}
              className="flex gap-[0.6vw] w-fit p-[0.4vw] items-center bg-cDarkGreen rounded-lg"
            >
              <div>
                <Image src={imgSrc} width={30} height={30} layout="responsive" alt="" />
              </div>
              <p className="text-[0.9vw] text-white">{dropdownData[selectedPage].newEntityLabel}</p>
            </button>
          ) : (
            // Invisible placeholder div that takes the same space as the button
            <div className="flex gap-[0.6vw] w-fit p-[0.4vw] items-center invisible">
              <div>
                <Image src={imgSrc} width={30} height={30} layout="responsive" alt="" />
              </div>
              <p className="text-[0.9vw] text-white">Placeholder</p>
            </div>
          )}
        </div>

        <div className="ml-4 flex gap-4">
          {Object.keys(dropdownData).map((key) => (
            <div
              key={key}
              onClick={() => setSelectedPage(key)}
              className={`w-fit cursor-pointer ${selectedPage === key ? "text-black" : "text-[#BFBFBC]"}`}
            >
              <p className="px-[0.6vw]">{key}</p>
              {selectedPage === key && (
                <div className="bg-cDarkGreen h-[0.4vw] w-full rounded-tr-lg rounded-tl-lg"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        {renderComponentForTab(selectedPage)}
      </div>
    </div>
  );
};

export default PageLayout;
