'use client'
import Image from "next/image";
import { useState } from "react";
import PopUp from "../Modals/popUp";
import AreaEditModal from "../Modals/EditModals/areaEditModal";
import ZonalOverviewEditModal from "../Modals/EditModals/zoneOverviewEditModal";
import ZonalLandmarkEditModal from "../Modals/EditModals/zoneLandmarkEditModal";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiPencil } from "react-icons/bi";

const img = "/vectors/image.svg";
const del = "/vectors/delete.svg";
const edit = "/vectors/edit.svg";
const cottage = "/vectors/cottage.svg";

type HorizontalCardsProps = {
  residential: number;
  business: number;
  government: number;
  state: string;
  area: string;
  landmark:string;
  areaCode: string;
  areaZoneName:string;
  landmarkCode:string;
  creationCost:number;
  areaZoneNameValue:string;
  landmarkName:string;
  LandmarkName:string;
  landmarkValue:string;
  zone: string;
  zoneCode: string;
  volume: number;
  volumeIncreasePercentage: number;
  collectionFrequency: string;
  successRate: number;
  staffAssigned: number;
  trucks: number;
  response: number;
  isZone: boolean; 
  isZoneLandmark:boolean; 
};

export default function HorizontalCards({
  residential,
  business,
  government,
  state,
  area,
  landmarkName,
  LandmarkName,
  landmarkCode,
  creationCost,
  landmark,
  landmarkValue,
  areaCode,
  zone,
  areaZoneName,
  areaZoneNameValue,
  zoneCode,
  volume,
  volumeIncreasePercentage,
  collectionFrequency,
  successRate,
  staffAssigned,
  trucks,
  response,
  isZone,
  isZoneLandmark, 
}: HorizontalCardsProps) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isAreaEditModalOpen, setIsAreaEditModalOpen] = useState(false);
  const [isZoneOverviewModalOpen, setIsZoneOverviewModalOpen] = useState(false);
  const [isZonalLandmarkEditModalOPen, setIsZonalLandmarkEditModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleDelete = () => {
    setIsPopUpOpen(true);
    console.log("Delete button clicked");
  };

  const handlePopUpClose = () => {
    setIsPopUpOpen(false);
  };

  const handleConfirm = () => {
    console.log("Confirmed action");
    setIsPopUpOpen(false);
  };

  
  const handleEdit = () => {
    if (isZone) {
      setModalData({ zone, zoneCode }); 
      setIsZoneOverviewModalOpen(true);}
    else if (isZoneLandmark){
      setModalData({creationCost,LandmarkName,landmarkCode});
      setIsZonalLandmarkEditModalOpen(true);
    
    } else {
      setModalData({ area, areaCode }); 
      setIsAreaEditModalOpen(true);
    }
  };

  const handleCloseEditModal = () => {
    setIsAreaEditModalOpen(false);
    setIsZoneOverviewModalOpen(false);
    setIsZonalLandmarkEditModalOpen(false)
    
    setModalData({});
  };

  return (
    <div className="border-[2px] cursor-pointer hover:border-cDarkGreen rounded-xl h-fit w-[49%] mb-4 p-4">
      <div className="flex gap-2 w-fit">
        
        <div className="w-[50%] flex flex-col justify-between">
          <div className="h-[15vw] w-[15vw]">
            <Image src={img} alt="" width={30} height={30} layout="responsive" />
          </div>
          <div className="flex justify-between py-1">
            <div className="flex items-center gap-2">
              <div className="flex pr-[0.6vw] border-0 h-fit p border-r-2 border-r-black">
                <p className="font-medium pr-[0.2vw] text-[0.8vw]">Res:</p>
                <p className="text-cGreen text-[0.8vw]">{residential}</p>
              </div>
              <div className="flex border-0 h-fit pr-[0.6vw] p border-r-2 border-r-black">
                <p className="font-medium pr-[0.1vw] text-[0.8vw]">Bus:</p>
                <p className="text-cGreen text-[0.8vw]">{business}</p>
              </div>
              <div className="flex border-0 h-fit pr-[0.6vw] p border-r-2 border-r-black">
                <p className="font-medium pr-[0.1vw] text-[0.8vw]">Gov:</p>
                <p className="text-cGreen text-[0.8vw]">{government}</p>
              </div>
            </div>
            <p className="cursor-pointer bg-cGreen px-[0.6vw] border rounded-lg pt-[0.15vw] flex font-medium text-white text-[1vw]">
              Active
            </p>
          </div>
        </div>

        
        <div className="w-[60%] flex flex-col justify-between">
          <div className="flex justify-between">
            <div className="flex pb-2 gap-[0.4vw]">
              <p className="text-[1vw]">{area}{zone}{landmark}:</p>
              <p className="text-[#595958] text-[1vw]">{areaCode}{zoneCode}{LandmarkName}</p>
            </div>
            <div className="flex gap-2">
              <div className="w-[1.4vw] h-[1.4vw] items-center flex">
                <Image src={cottage} width={30} height={30} layout="responsive" alt="" />
              </div>
              <div className="flex gap-[0.2vw] items-center">
                <p className="text-[1vw]">{areaZoneName}{landmarkName}:</p>
                <p className="font-medium pl-[0.2vw] text-[1vw]">{landmarkValue}{areaZoneNameValue}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="border flex flex-col justify-between rounded-xl w-fit p-[0.8vw]">
              <div>
                <p className="text-[#595958] text-[1vw] font-medium">Volume Collected</p>
                <p className="text-[1.4vw]">{volume} Tons</p>
              </div>
              <div className="flex gap-[0.6vw] items-center justify-between">
                <div className="w-[1.4vw] h-[1.4vw] items-center flex">
                  <Image src="/vectors/up.svg" width={10} height={10} layout="responsive" alt="Up Icon" />
                </div>
                <div>
                  <div className="flex gap-[0.4vw]">
                    <p className="text-cDarkGreen text-[0.9vw]">{volumeIncreasePercentage}%</p>
                    <p className="text-[0.9vw] text-nowrap text-[#595958]">Up from</p>
                  </div>
                  <p className="text-[#595958] text-[0.9vw]">Last Month</p>
                </div>
              </div>
            </div>

            <div className="w-[60%] flex flex-col gap-2">
              <div className="flex gap-[0.4vw]">
                <div className="p-[0.6vw] border rounded-xl w-[50%]">
                  <p className="text-[#595958] text-[0.9vw]">Collection Frequency</p>
                  <p className="font-[400] text-[1.5vw]">{collectionFrequency}</p>
                </div>
                <div className="border p-[0.6vw] rounded-xl w-[50%]">
                  <p className="text-[#595958] text-[0.9vw]">Success Rate</p>
                  <p className="text-[1.5vw]">{successRate}%</p>
                </div>
              </div>

              <div className="flex gap-[0.6vw] w-full">
                <div className="border rounded-xl p-[0.6vw] w-[50%]">
                  <p className="text-[#595958] text-[0.9vw]">Staff Assigned</p>
                  <p className="font-[400] text-[1.5vw]">{staffAssigned}</p>
                </div>
                <div className="border rounded-xl w-[50%] p-[0.6vw]">
                  <p className="text-[#595958] text-[0.9vw]">Trucks</p>
                  <p className="font-[400] text-[1.7vw]">{trucks}</p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="flex justify-between mt-2">
            <div className="flex gap-2 rounded-xl border px-2 text-gray-800 text-[1vw] py-1 items-center">
              <p className="text-[1vw]">Average Response Time:</p>
              <p className="text-[1vw]">{response} hrs</p>
            </div>
            <div className="flex gap-2">
              <button onClick={handleEdit} className="flex items-center justify-center rounded-full text-[0.8vw] text-cDarkGreen hover:bg-[#EAF5EB] border-2 p-[0.6vw]">
              <BiPencil />
              </button>
              <button onClick={handleDelete} className="flex items-center justify-center rounded-full hover:bg-red-500 text-[0.8vw] hover:text-white text-cDarkGreen  border-2 p-[0.6vw]">
              <RiDeleteBin6Line />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isPopUpOpen && (
        <PopUp
          title="Delete Location"
          message="This action will permanently remove this location and will delink it from subsequent locations, analytics and other linked features."
          showCheckboxes={false}
          onCancel={handlePopUpClose}
          onConfirm={handleConfirm}
          onClose={handlePopUpClose}
          cancelText="Cancel"
          confirmText="Ok "
        />
      )}
      
      <AreaEditModal
        isOpen={isAreaEditModalOpen}
        closeModal={handleCloseEditModal}
        initialData={modalData}
      />
      <ZonalOverviewEditModal
        isOpen={isZoneOverviewModalOpen}
        closeModal={handleCloseEditModal}
        initialData={modalData}
      />

      <ZonalLandmarkEditModal
        isLandmarkOpen={isZonalLandmarkEditModalOPen}
        closeLandmarkModal={handleCloseEditModal}
        initialData={modalData}
      />
    </div>
  );
}
