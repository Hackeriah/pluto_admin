import { RequestFullData } from "@/app/api/fullTableData";
import { clientsOverviewFullData } from "@/app/api/fullTableData";
import { clientsB_PFullData } from "@/app/api/fullTableData";
import { ScheduleDropOffData } from "@/app/api/fullTableData";
function getViewButton(handleClick: () => void) {
  return (
    <div className="flex justify-center">
      <button
        onClick={handleClick}
        className="bg-cDarkGreen rounded-md flex items-center text-white text-[1vw] justify-center pt-1  px-4 text-center"
      >
        View
      </button>
    </div>
  );
}



  function checkbox(){
    return(

    <input type="checkbox" className="h-4 w-4 border items-center" />
  )
    
  }


export function RequestData() {
  
  const fullData = RequestFullData();

  const tableData = fullData[0].requests.map((request) => ({
    id: request.id, 
    requestId: request.requestId,
    description: request.orderInfo.description,
    priority: request.orderInfo.priority,
    name: request.customerInfo.name,
    date: request.orderInfo.requestedPickup, 
    status: request.orderInfo.status, 
    actions: getViewButton(), 
  }));

  return tableData;
}



export function clientsOverviewData(){
  const fullData = clientsOverviewFullData()
  const tableData = fullData[0].clients.map((client) => ({
    id: client.id,
    name:client.personalInfo.name,
    type:client.personalInfo.clientType,
    contactInfo:client.personalInfo.email,
    location:client.locationInformation.locations,
    address:client.personalInfo.address,
    status:client.personalInfo.status,
    actions: getViewButton()
}));
return tableData;
}


export function clientsB_PData(){
  const fullData = clientsB_PFullData()
  const tableData = fullData.map((client) => ({

    invoice: client.invoiceId,
    invoiceNote: client.invoiceNote,
    name: client.customerName,
    type:client.customerType,
    amount:client.amount,
    dueDate:client.dueDate,
    status:client.status,
    // actions: getViewButton()
  }));

return tableData;
}




export function ecommerceProductsData(
  checkedAll: boolean,
  handleCheckboxChange: (index: number) => void
) {
  const tableData = [
    {
      batch: (
        <input
          type="checkbox"
          className="h-4 w-4 border items-center"
          checked={checkedAll}
          onChange={() => handleCheckboxChange(0)}
        />
      ),
      productId: "P001",
      productName: "Laptop",
      category: "Electronics",
      stock: 30,
      price: 100000,
      discount: 10,
      tags: "Sale",
      actions: getViewButton(),
    },
    {
      batch: (
        <input
          type="checkbox"
          className="h-4 w-4 border items-center"
          checked={checkedAll}
          onChange={() => handleCheckboxChange(1)}
        />
      ),
      productId: "P002",
      productName: "Smartphone",
      category: "Electronics",
      stock: 50,
      price: 50000,
      discount: 15,
      tags: "New",
      actions: getViewButton(),
    },
  ];

  return tableData;
}




// export function ecommerceOrdersData(){
//     const tableData = [
//     { batch: checkbox(), orderId: "ORD001", area: "Lagos", quantity: "10", productName: "Laptop", totalPrice: "₦100,000", status: "Pending", actions: getViewButton() },
//     { batch: checkbox(), orderId: "ORD002", area: "Abuja", quantity: "5", productName: "Smartphone", totalPrice: "₦50,000", status: "Completed", actions: getViewButton() }
//     ];
//     return tableData;
// }



export function ecommerceOrdersData(checkedAll: boolean, handleCheckboxChange: (index: number) => void) {
  const tableData = [
    {
      batch: (
        <input
          type="checkbox"
          className="h-4 w-4 border items-center"
          checked={checkedAll}
          onChange={() => handleCheckboxChange(0)}
        />
      ),
      id: 1,
      orderId: "ORD001",
      area: "Lagos",
      quantity: "10",
      productName: "Laptop",
      totalPrice: "₦100,000",
      status: "Pending",
      actions: getViewButton(() => console.log("View ORD001")),
    },
    {
      batch: (
        <input
          type="checkbox"
          className="h-4 w-4 border items-center"
          checked={checkedAll}
          onChange={() => handleCheckboxChange(1)}
        />
      ),
      id:2,
      orderId: "ORD002",
      area: "Abuja",
      quantity: "5",
      productName: "Smartphone",
      totalPrice: "₦50,000",
      status: "Completed",
      actions: getViewButton(() => console.log("View ORD002")),
    },
  ];

  return tableData;
}





// Pass checkedAll and handleCheckboxChange as parameters
export function ecommerceShipmentsData(
  checkedAll: boolean,
  handleCheckboxChange: (index: number) => void
): TableRow[] {
  const tableData: TableRow[] = [
    {
      batch: (
        <input
          type="checkbox"
          className="h-4 w-4 border items-center"
          checked={checkedAll}
          onChange={() => handleCheckboxChange(0)}
        />
      ),
      id:1,
      shipmentId: "SHIP001",
      area: "Lagos",
      productName: "Laptop",
      quantity: "10",
      shipmentDate: "2024-12-01",
      status: "Shipped",
      actions: getViewButton(),
    },
    {
      batch: (
        <input
          type="checkbox"
          className="h-4 w-4 border items-center"
          checked={checkedAll}
          onChange={() => handleCheckboxChange(1)}
        />
      ),
      id:2,
      shipmentId: "SHIP002",
      area: "Abuja",
      productName: "Smartphone",
      quantity: "5",
      shipmentDate: "2024-12-03",
      status: "Pending",
      actions: getViewButton(),
    },
  ];

  return tableData;
}


export function ecommerceRestockData(
  checkedAll: boolean,
  handleCheckboxChange: (index: number) => void
) {
  const tableData = [
    {
      batch: (
        <input
          type="checkbox"
          className="h-4 w-4 border items-center"
          checked={checkedAll}
          onChange={() => handleCheckboxChange(0)}
        />
      ),
      id:1,
      restockId: "REST001",
      area: "Lagos",
      productName: "Laptop",
      quantity: "10",
      requestDate: "2024-12-01",
      status: "Pending",
      actions: getViewButton(),
    },
    {
      batch: (
        <input
          type="checkbox"
          className="h-4 w-4 border items-center"
          checked={checkedAll}
          onChange={() => handleCheckboxChange(1)} // Changed index to 1 for the second item
        />
      ),
      id:2,
      restockId: "REST002",
      area: "Abuja",
      productName: "Smartphone",
      quantity: "5",
      requestDate: "2024-12-03",
      status: "Completed",
      actions: getViewButton(),
    },
  ];

  return tableData;
}



export function queriesData(
  checkedAll: boolean,
  handleCheckboxChange: (index: number) => void
) {
  const tableData = [
    {
      batch: (
        <input
          type="checkbox"
          className="h-4 w-4 border items-center"
          checked={checkedAll}
          onChange={() => handleCheckboxChange(0)} // Changed index to 0 for the first item
        />
      ),
       id: 1,
      queryId: "QUERY001",
      user: "John Doe",
      category: "Billing",
      priority: "High",
      orderDate: "2024-12-01",
      status: "Resolved",
      actions: getViewButton(),
    },
    {
      batch: (
        <input
          type="checkbox"
          className="h-4 w-4 border items-center"
          checked={checkedAll}
          onChange={() => handleCheckboxChange(1)} // Changed index to 1 for the second item
        />
      ),
      id:2,
      queryId: "QUERY002",
      user: "Jane Smith",
      category: "Technical Support",
      priority: "Low",
      orderDate: "2024-12-02",
      status: "Pending",
      actions: getViewButton(),
    },
  ];

  return tableData;
}



export function ItSupportData(){
    const tableData = [
    { id:1, ticketId: "TICKET001", user: "John Doe", category: "Hardware", priority: "High", dateReported: "2024-12-01", status: "Resolved", actions: getViewButton() },
    { id:2, ticketId: "TICKET002", user: "Jane Smith", category: "Software", priority: "Low", dateReported: "2024-12-02", status: "Pending", actions: getViewButton() },
]
return tableData;
}


export function DashboardTicket() {
    const tableData = [
        { alertType: "Complaint", status: "Resolved", timeStamp: "2024-12-01 02:30 PM" },
        { alertType: "Enquiry", status: "Open", timeStamp: "2024-12-02 11:15 AM" },
    ];
    
    return tableData;
}

export function RecentActivities() {
    const tableData = [
        { action: "Created  Area", stateAdmin: "John Doe", dateTime: "Mon 26/1:55PM" },
        { action: "Created  Area", stateAdmin: "Jane Smith", dateTime: "Tue 27/11:15AM" },
    ];
    
    return tableData;
}

export function ScheduleDropOffTableData() {
    const tableData = [
      {id: 1, stationId: "ST001", stationName: "Main Station", location: "Lagos", capacity: "500", creationDate: "2025-01-01", status: "Active",   actions: getViewButton() },
      {id: 2, stationId: "ST002", stationName: "Sub Station A", location: "Abuja", capacity: "300", creationDate: "2025-01-03", status: "Inactive", actions: getViewButton() },
    ];
  
    return tableData;
  }
  

  export function contentData(
    checkedAll: boolean,
    handleCheckboxChange: (index: number) => void
  ) {
    const tableData = [
      {
        batch: (
          <input
            type="checkbox"
            className="h-4 w-4 border items-center"
            checked={checkedAll}
            onChange={() => handleCheckboxChange(0)} // Changed index to 0 for the first item
          />
        ),
        id: 1,
        topic: "AI Revolution",
        subtitle: "AI's Impact",
        orderDate: "2025-01-15",
        likes: "1200",
        status: "Active",
        actions: getViewButton(),
      },
      {
        batch: (
          <input
            type="checkbox"
            className="h-4 w-4 border items-center"
            checked={checkedAll}
            onChange={() => handleCheckboxChange(1)} // Changed index to 1 for the second item
          />
        ),
        id:2,
        topic: "Cybersecurity Trends",
        subtitle: "Cyber Defense",
        orderDate: "2025-01-18",
        likes: "980",
        status: "Inactive",
        actions: getViewButton(),
      },
    ];
  
    return tableData;
  }
  
  
  export function staffData() {
  const data = [
    { staffImage: "/images/staff1.png", location: "Lagos", status: "Active", name: "Oladele Janet", staffId: "PLUTO10001", role: "State Admin" },
    { staffImage: "/images/staff2.png", location: "Abuja", status: "Active", name: "Emeka Obi", staffId: "PLUTO10002", role: "Regional Admin" },]
return data}