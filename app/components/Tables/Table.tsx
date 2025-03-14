import React, { useState } from 'react';
import RequestOverviewModal from '../Modals/viewModals/requestOverviewModal';
import ScheduleDropOffModal from '../Modals/viewModals/scheduleDropOffModal';
import ClientsOverviewModal from '../Modals/viewModals/clientsOverviewModal';
import EcommerceOrdersModal from '../Modals/viewModals/ecommerceOrderModal';
import EcommerceRestockModal from '../Modals/viewModals/ecommerceRestockModal';
import EcommerceShipmentModal from '../Modals/viewModals/ecommerceShipmentModal';

import QueriesModal from '../Modals/viewModals/queriesModal';
import ContentsModal from '../Modals/viewModals/contentsModal';


interface Header {
  label: string;
}

interface TableRow {
  [key: string]: string | number | React.ReactNode;
}

interface DetailedRequest {
  requestId: string;
  customerInfo: {
    name: string;
    address: string;
    phoneNo: string;
    email: string;
  };
  orderInfo: {
    eventType: string;
    wasteType: string;
    requestedPickup: string;
    description: string;
    status: string;
    priority: string;
    lastUpdate: {
      message: string;
      time: string;
    };
  };
  activityLog: {
    timestamp: string;
    action: string;
    user: string;
  }[];
}

interface TableProps {
  header: Header[];
  tableData: TableRow[];
  fullData: DetailedRequest[];
  checkedAll: boolean; // New prop to manage check all functionality
  toggleAllCheckboxes: () => void; // Function to toggle all checkboxes
  handleCheckboxChange: (index: number) => void; // Function to handle individual checkbox changes
  modalType: "ecommerceProduct"|"ecommerceShipment"|'requestOverview' | 'scheduleDropOff' |'clientsOverview' | "ecommerceOrder"|'ecommerceRestock'|'queries' |'contents'; 
}

const Table: React.FC<TableProps> = ({ 
  header, 
  tableData, 
  fullData, 
  checkedAll, 
  toggleAllCheckboxes, 
  handleCheckboxChange, 
  modalType 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState<DetailedRequest | null>(null);

  const truncateText = (text: string | number | React.ReactNode) => {
    if (typeof text === 'string' && text.length > 40) {
      return text.slice(0, 40) + '...';
    }
    return text;
  };

  const handleViewClick = (rowData: TableRow) => {
    if (!rowData || !rowData.id) {
      console.error("Invalid rowData or id not found.");
      return;
    }

    const detailedData = fullData.find((item) => item.id === rowData.id);
    if (!detailedData) {
      console.error("Detailed data for the requestId not found.");
      return;
    }

    setSelectedRowData(detailedData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRowData(null);
  };

  return (
    <>
      <table className="table-auto w-full">
        <thead>
          <tr>
            {header.map((headItem, index) => (
              <th key={index} className="px-4 py-2 text-center items-center">
                {headItem.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t text-center">
              {Object.keys(row)
                .filter((key) => key !== 'id')
                .map((key, colIndex) => (
                  <td key={colIndex} className="px-4 py-2 max-w-[20ch] truncate">
                    {key === 'actions'
                      ? (
                        <div className="flex justify-center">
                          <button
                            onClick={() => handleViewClick(row)}
                            className="bg-cDarkGreen rounded-md flex items-center text-white text-[1vw] justify-center pt-1 px-4 text-center"
                          >
                            View
                          </button>
                        </div>
                      )
                      : key === 'batch'
                        ? (
                          <input
                            type="checkbox"
                            className="h-4 w-4 border items-center"
                            checked={checkedAll || false}
                            onChange={() => handleCheckboxChange(rowIndex)}
                          />
                        )
                        : row[key]}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modals */}
      {modalType === 'requestOverview' && (
        <RequestOverviewModal isOpen={isModalOpen} onClose={closeModal} rowData={selectedRowData} />
      )}
      {modalType === 'scheduleDropOff' && (
        <ScheduleDropOffModal isOpen={isModalOpen} onClose={closeModal} rowData={selectedRowData} />
      )}
      {modalType === 'clientsOverview' && (
        <ClientsOverviewModal isOpen={isModalOpen} onClose={closeModal} rowData={selectedRowData} />
      )}
      {modalType === 'ecommerceOrder' && (
        <EcommerceOrdersModal isOpen={isModalOpen} onClose={closeModal} rowData={selectedRowData} />
      )}
      {modalType === 'ecommerceShipment' && (
        <EcommerceShipmentModal isOpen={isModalOpen} onClose={closeModal} rowData={selectedRowData} />
      )}
      {modalType === 'ecommerceRestock' && (
        <EcommerceRestockModal isOpen={isModalOpen} onClose={closeModal} rowData={selectedRowData} />
      )}
      {modalType === 'queries' && (
        <QueriesModal isOpen={isModalOpen} onClose={closeModal} rowData={selectedRowData} />
      )}
       {modalType === 'contents' && (
        <ContentsModal isOpen={isModalOpen} onClose={closeModal} rowData={selectedRowData} />
      )}
      {modalType === 'ecommerceProduct' && (
        <ContentsModal isOpen={isModalOpen} onClose={closeModal} rowData={selectedRowData} />
      )}
    </>
  );
};

export default Table;
