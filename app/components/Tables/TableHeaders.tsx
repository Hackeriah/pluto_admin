import { FaUser } from 'react-icons/fa6';
import React from 'react';

type Header = {
  label: React.ReactNode;
  type?: string;
};

export function RequestHeader(): Header[] {
  const headers: Header[] = [
    { label: 'REQUEST ID' },
    { label: 'DETAILS' },
    { label: 'PRIORITY' },
    { label: 'USER' },
    { label: 'REQUEST DATE' },
    { label: 'STATUS' },
    { label: 'ACTIONS' },
  ];
  return headers;
}


export function ScheduleDropOff(): Header[] {
  const headers: Header[] = [
    { label: "STATION ID" },
    { label: "STATION NAME" },
    { label: "LOCATION" },
    { label: "CAPACITY (TON)" },
    { label: " CREATION DATE" },
    { label: "STATUS"},
    { label: "ACTIONS" },
  ];

  return headers;
}

export function clientsOverview(): Header[] {
  const headers: Header[] = [
    { label: " NAME" },
    { label: "TYPE" },
    { label: " CONTACT INFO"},
    { label: "LOCATION" },
    { label: "ADDRESS" },
    { label: " STATUS"},
    // { label: "ACTIONS" },
  ];

  return headers;
}

export function ClientsB_P(): Header[] {
  const headers: Header[] = [
    { label: "INVOICE" },
    { label: "INVOICE NOTE" },
    { label: " NAME"},
    { label: "TYPE" },
    { label: "AMOUNT(₦)" },
    { label: " DUE DATE"},
    { label: " STATUS"},
  ];

  return headers;
}

export function EcommerceProducts(checkedAll: boolean, toggleAllCheckboxes: () => void): Header[] {
  const headers: Header[] = [
    {
      label: (
        <input
          type="checkbox"
          className="h-4 w-4 border items-center"
          checked={checkedAll}
          onChange={toggleAllCheckboxes}
        />
      ),
    },
    { label: "PRODUCT ID" },
    { label: "PRODUCT NAME" },
    { label: "CATEGORY" },
    { label: "STOCK" },
    { label: "PRICE(₦)" },
    { label: "DISCOUNT(%)" },
    { label: "TAGS" },
    { label: "ACTIONS" },
  ];

  return headers;
}





export function EcommerceOrders(checkedAll: boolean, toggleAllCheckboxes: () => void): Header[] {
  return [
    {
      label: (
        <input
          type="checkbox"
          className="h-4 w-4 border items-center"
          checked={checkedAll}
          onChange={toggleAllCheckboxes}
        />
      ),
    },
    { label: "ORDER ID" },
    { label: "AREA" },
    { label: "QUANTITY" },
    { label: "PRODUCT NAME" },
    { label: "TOTAL PRICE(₦)" },
    { label: "STATUS" },
    { label: "ACTIONS" },
  ];
}






export function EcommerceShipments(checkedAll: boolean, toggleAllCheckboxes: () => void): Header[] {
  const headers: Header[] = [
    {
      label: (
        <input
          type="checkbox"
          className="h-4 w-4 border items-center"
          checked={checkedAll}
          onChange={toggleAllCheckboxes}
        />
      ),
    },
    { label: "SHIPMENTS ID" },
    { label: "AREA" },
    { label: "PRODUCT NAME" },
    { label: "QUANTITY" },
    { label: "SHIPMENT DATE" },
    { label: "STATUS" },
    { label: "ACTIONS" },
  ];

  return headers;
}


export function EcommerceRestock(checkedAll: boolean, toggleAllCheckboxes: () => void): Header[] {
  const headers: Header[] = [
    {
      label: (
        <input
          type="checkbox"
          className="h-4 w-4 border items-center"
          checked={checkedAll}
          onChange={toggleAllCheckboxes}
        />
      ),
    },
    { label: "RESTOCK ID" },
    { label: "AREA" },
    { label: "PRODUCT NAME" },
    { label: "QUANTITY" },
    { label: "REQUEST DATE" },
    { label: "STATUS" },
    { label: "ACTIONS" },
  ];

  return headers;
}


export function Queries(checkedAll: boolean, toggleAllCheckboxes: () => void): Header[] {
  const headers: Header[] = [
    {
      label: (
        <input
          type="checkbox"
          className="h-4 w-4 border items-center"
          checked={checkedAll}
          onChange={toggleAllCheckboxes}
        />
      ),
    },
    { label: "QUERY ID" },
    { label: "USER" },
    { label: "CATEGORY" },
    { label: "PRIORITY" },
    { label: "ORDER DATE" },
    { label: "STATUS" },
    { label: "ACTIONS" },
  ];

  return headers;
}


export function ITSupportHeader(): Header[] {
  const headers: Header[] = [
    { label: "TICKET ID" },
    { label: " USER"},
    { label: "CATEGORY" },
    { label: "PRIORITY" },
    { label: " DATE REPORTED"},
    { label: " STATUS"},
    { label: "ACTIONS" },
  ];

  return headers;
}

export function DashboardTicketHeader(): Header[] {
  const headers: Header[] = [
    { label: "ALERT TYPE" },
    { label: "STATUS" },
    { label: "TIME STAMP" },
  ];

  return headers;
}

export function RecentActivitiesHeader(): Header[] {
  const headers: Header[] = [
    { label: "ACTION" },
    { label: "STATE ADMIN" },
    { label: "DATE/TIME" },
  ];

  return headers;
}

export function contentHeader(checkedAll: boolean, toggleAllCheckboxes: () => void): Header[] {
  const headers: Header[] = [
    {
      label: (
        <input
          type="checkbox"
          className="h-4 w-4 border items-center"
          checked={checkedAll}
          onChange={toggleAllCheckboxes}
        />
      ),
    },

    { label: "TOPIC" },
    { label: "SUBTITLE" },
    { label: "ORDER DATE" },
    { label: "LIKES" },
    { label: "STATUS" },
    { label: "ACTIONS" },
  ];

  return headers;
}

