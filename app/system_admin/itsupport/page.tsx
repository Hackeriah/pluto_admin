"use client"
import { useState } from "react";
import Image from "next/image";
import DataControlPanel from "@/app/components/dataControlPanel";
import { ITSupportDCP } from "@/app/components/dcpData";
import { ITSupportToolBar } from "@/app/components/actionToolBarData";
import AnalyticsCard from "@/app/components/Cards/AnalyticsCard";
import { ITSupportHeader } from "@/app/components/Tables/TableHeaders";
import { ItSupportFullData } from "@/app/api/fullTableData";
import { ItSupportData } from "@/app/components/Tables/TableData";
import ITSupportModal from "@/app/components/Modals/viewModals/ITSupportModal"; // Importing the new Modal component

export default function ITSupport() {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to open the modal when the "View" button is clicked
  const handleViewClick = (ticketId) => {
    const fullData = ItSupportFullData()[0].tickets.find(ticket => ticket.id === ticketId);
    setSelectedTicket(fullData);
    setModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedTicket(null);
  };

  const data = [
    {
      title: "Total Clients",
      count: 120,
      icon: (
        <Image
          src="/vectors/clienticon.svg"
          width={40}
          height={40}
          layout="reponsive"
          alt="Clients Icon"
        />
      ),
      percentage: "5%",
      percenText: "down from last month",
      up: (
        <Image src="/vectors/down.svg" width={30} height={30} alt="down Icon" />
      ),
    },
    {
      title: "Total Staff",
      count: 80,
      icon: (
        <Image
          src="/vectors/stafficon.png"
          width={40}
          height={40}
          layout="reponsive"
          alt="Staff Icon"
        />
      ),
      percentage: "2%",
      percenText: "down from last month",
      up: (
        <Image src="/vectors/down.svg" width={30} height={30} alt="Down Icon" />
      ),
    },
    {
      title: "Total States",
      count: 10,
      icon: (
        <Image
          src="/vectors/stateicon.svg"
          width={40}
          height={40}
          layout="reponsive"
          alt="States Icon"
        />
      ),
      percentage: "8%",
      percenText: "Up from last month",
      up: <Image src="/vectors/up.svg" width={30} height={30} alt="Up Icon" />,
    },
    {
      title: "Open Tickets",
      count: 25,
      icon: (
        <Image
          src="/vectors/ticketicon.png"
          width={40}
          height={40}
          layout="reponsive"
          alt="Tickets Icon"
        />
      ),
      percentage: "3%",
      percenText: "Up from last month",
      up: <Image src="/vectors/up.svg" width={30} height={30} alt="Up Icon" />,
    },
  ];

  const tableHeaders = ITSupportHeader();
  const tableData = ItSupportData();

  return (
    <div className="pl-4 flex flex-col gap-4 my-4">
      
      <div className="flex w-full gap-6">
        {data.map((item, index) => (
          <AnalyticsCard
            key={index}
            title={item.title}
            count={item.count}
            icon={item.icon}
            percentage={item.percentage}
            percenText={item.percenText}
            up={item.up}
          />
        ))}
      </div>

      {/* Data Control Panel */}
      <DataControlPanel dropdownData={ITSupportDCP()} buttons={ITSupportToolBar()} />

      {/* Table Here */}
      <div className="mt-8">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={index} className="px-4 py-2 text-left">
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id} className="border-b">
                <td className="px-4 py-2">{row.ticketId}</td>
                <td className="px-4 py-2">{row.user}</td>
                <td className="px-4 py-2">{row.category}</td>
                <td className="px-4 py-2">{row.priority}</td>
                <td className="px-4 py-2">{row.dateReported}</td>
                <td className="px-4 py-2">{row.status}</td>
                <td className="px-4 py-2">
                  <button
                    className="bg-cDarkGreen text-white px-3 py-1 rounded-lg"
                    onClick={() => handleViewClick(row.id)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      
      </div>


      {/* Modal - Rendered when a ticket is selected */}
      <ITSupportModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        ticket={selectedTicket}
      />
    </div>
  );
}
