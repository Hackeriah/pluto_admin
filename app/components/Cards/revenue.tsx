import Image from "next/image";
import React from "react";

const img = "/vectors/revenue.svg";

const Revenue = ({ data }) => {
  return (
    <div className="w-full border rounded-xl p-4">
      <p className="font-semibold text-lg">Revenue</p>
      <div className="flex flex-wrap justify-between">
        {data.map((item, index) => (
          <div key={index} className="flex w-[48%] mb-6">
            <Image src={img} width={60} height={30} alt="Revenue Icon" />
            <div className="ml-4 w-full">
              <div className="flex justify-between">
                <p>{item.location}</p>
                <p>{item.percentage}%</p>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="bg-green-100 border rounded-2xl w-[70%] h-[1.2vw] flex items-center">
                  <div
                    className="bg-cGreen border rounded-2xl p-[6px] h-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <p className="ml-4">{item.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Revenue;
