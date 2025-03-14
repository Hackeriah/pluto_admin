// Function to get the full JSON data
import { Aiblog, Cyberblog } from "./blog";
export function RequestFullData() {
    const fullData = [
      {
        "requests": [
          {
            "id": 1,
            "requestId": "RQT12345",
            "customerInfo": {
              "name": "Oladele Johnson",
              "address": "456 Market Street, Area 2, Zone 4",
              "phoneNo": "+234 806 123 4567",
              "email": "oladele.johnson@gmail.com"
            },
            "orderInfo": {
              "eventType": "Party",
              "wasteType": "Hazardous",
              "requestedPickup": "2024-12-11T10:00:00",
              "description": "This rule flags accounts with multiple failed login attempts from the same IP address.",
              "status": "pending",
              "priority": "Critical",
              "lastUpdate": {
                "message": "Request Submitted",
                "date": "November 4, 2024, 10:00 AM"
              }
            },
            "activityLog": [
              {
                "timestamp": "2024-11-01T09:00:00",
                "action": "Request created",
                "user": "Admin"
              },
              {
                "timestamp": "2024-11-04T10:00:00",
                "action": "Request submitted",
                "user": "Oladele Johnson"
              }
            ]
          },
          {
            "id": 2,
            "requestId": "RQT67890",
            "customerInfo": {
              "name": "Adesanya Smith",
              "address": "789 Commerce Avenue, Area 3, Zone 5",
              "phoneNo": "+234 805 234 5678",
              "email": "adesanya.smith@email.com"
            },
            "orderInfo": {
              "eventType": "Conference",
              "wasteType": "Recyclable",
              "requestedPickup": "2024-12-12T09:00:00",
              "description": "This rule monitors for abnormal transaction activities.",
              "status": "in-progress",
              "priority": "High",
              "lastUpdate": {
                "message": "Request In Progress",
                "time": "November 5, 2024, 11:30 AM"
              }
            },
            "activityLog": [
              {
                "timestamp": "2024-11-02T09:30:00",
                "action": "Request created",
                "user": "Admin"
              },
              {
                "timestamp": "2024-11-05T11:30:00",
                "action": "Request in-progress",
                "user": "Adesanya Smith"
              }
            ]
          }
        ]
      }
    ]
  
    return fullData;
  }
  







    export function clientsOverviewFullData(){
        const data = [
        {
            "clients": [
                {
                "id": 1,
                "personalInfo": {
                    "clientType": "Individual",
                    "name": "Oladele Johnson",
                    "email": "Oladelejohnson@email.com",
                    "phoneNumber": "08145637877",
                    "status":"active",
                    "address":"123 5th Ave, NY",
                },
                "locationInformation": {
                    "numberOfLocationsAdded": 3,
                    "locations": [
                    "5-bedroom duplex, Ikoyi",
                    "3-bedroom flat, Yaba",
                    "Event Hall, Surulere"
                    ]
                },
                "subscriptionAndBillingInformation": {
                    "serviceType": "Household Waste",
                    "activeLocations": 2,
                    "billingMethod": "Per Location",
                    "paymentStatus": "Paid",
                    "lastPaymentDetails": "₦50,000 on 2024-11-10",
                    "nextDueDate": "2024-12-01"
                },
                "activityLog": [
                    {
                    "timestamp": "04/11/2024 10:00 AM",
                    "message": "Account Created",
                    "severity": "low"
                    },
                    {
                    "timestamp": "04/11/2024 10:15 AM",
                    "message": "Login",
                    "severity": "medium"
                    }
                ]
                },
                {
                "id": 2,
                "personalInfo": {
                    "clientType": "Organization",
                    "name": "Adesanya Smith",
                    "email": "Adesanyasmith@email.com",
                    "phoneNumber": "08012345678",
                    "status":"pending",
                    "address":"No 1 , Olayiwola street",
                },
                "locationInformation": {
                    "numberOfLocationsAdded": 2,
                    "locations": [
                    "Office Complex, Victoria Island",
                    "Warehouse, Ikeja"
                    ]
                },
                "subscriptionAndBillingInformation": {
                    "serviceType": "Commercial Waste",
                    "activeLocations": 1,
                    "billingMethod": "Flat Rate",
                    "paymentStatus": "Unpaid",
                    "lastPaymentDetails": "₦100,000 on 2024-10-05",
                    "nextDueDate": "2025-01-01"
                },
                "activityLog": [
                    {
                    "timestamp": "04/11/2024 10:00 AM",
                    "message": "Account Created",
                    "severity": "low"
                    },
                    {
                    "timestamp": "04/11/2024 10:15 AM",
                    "message": "Login",
                    "severity": "medium"
                    }
                ]
                }
            ]
            }
            
            ]
    return data;
    }


    export function clientsB_PFullData(){
        const tableData = [
        
            {
                "id":1,
                "invoiceId": "INV001",
                "invoiceNote": "Product purchase",
                "customerName": "John Doe",
                "email":"Johndoe@email.com",
                "customerType": "Corporate",
                "amount": 5000,
                "dueDate": "2024-12-20",
                "status": "Paid",
                "phoneNo":"08134567890",
                "actions": "View"
            },
            {
                "id":2,
                "invoiceId": "INV002",
                "invoiceNote": "Service fee",
                "customerName": "Jane Smith",
                "email":"janesmith@email.com",
                "phoneNo":"08035278345",
                "customerType": "Individual",
                "amount": 1500,
                "dueDate": "2024-12-21",
                "status": "Pending",
                "actions": "View"
            }
            ]
            
    return tableData;
    }




    export function ecommerceProductsFullData() {
        const data = [
        {
            "orderId": "001",
            "productInfo": {
                "name": "Eco Friendly Waste Bin",
                "type": "Physical Item",
                "description": "A 120L waste bin designed for household waste collection. Ideal for residential use."
            },
            "pricingDetails": {
                "basePrice": 20000,
                "additionalCost": 500,
                "discount": "10%"
            },
            "inventoryDetails": {
                "stockQuantity": "Eco Friendly Wastebin",
                "reorderLevel": 100,
                "unitPrice": 10
            },
            "images": [
                "/images/product1.png",
                "/images/product1.png",
                "/images/product1.png",
                "/images/product1.png"
            ],
            "actions": [
                {
                "label": "Delete",
                "color": "red",
                "actionType": "delete"
                },
                {
                "label": "Cancel",
                "color": "#FBC756",
                "actionType": "cancel"
                },
                {
                "label": "Edit",
                "color": "cDarkGreen",
                "actionType": "edit"
                }
            ]
            }
            ];
        return data;
    }



    export function ecommerceOrdersFullData() {
      const data = [
        {
            "orders": [
              {
                "id": 1,
                "productInfo": {
                  "name": "Michael Jordan",
                  "orderId": "ORD-000123",
                  "phoneNo": "08138256379",
                  "email": "michaeljordan@email.com"
                },
                "orderDetails": {
                  "product": "Eco Friendly Wastebin",
                  "quantity": 10,
                  "unitPrice": 1150,
                  "additionalCosts": 500,
                  "totalPrice": 11500
                },
                "paymentDetails": {
                  "paymentStatus": "Paid",
                  "paymentMethod": "Credit Card",
                  "transactionId": "TXN-98876543",
                  "totalPrice": 11500
                },
                "pickupDetails": {
                  "pickupCenter": "Lagos State Depot - Ikeja",
                  "pickupDate": "2014-11-21"
                },
                "images": [
                  "/images/product1.png",
                  "/images/product1.png",
                  "/images/product1.png",
                  "/images/product1.png"
                ],
                "actions": [
                  {
                    "label": "Reject",
                    "color": "#FBC756",
                    "actionType": "reject"
                  },
                  {
                    "label": "Approve",
                    "color": "cDarkGreen",
                    "actionType": "approve"
                  }
                ]
              },
              {
                "id": 2,
                "productInfo": {
                  "name": "LeBron James",
                  "orderId": "ORD-000456",
                  "phoneNo": "08138995678",
                  "email": "lebronjames@email.com"
                },
                "orderDetails": {
                  "product": "Recycled Paper Bags",
                  "quantity": 15,
                  "unitPrice": 800,
                  "additionalCosts": 300,
                  "totalPrice": 12000
                },
                "paymentDetails": {
                  "paymentStatus": "Pending",
                  "paymentMethod": "Bank Transfer",
                  "transactionId": "TXN-12345678",
                  "totalPrice": 12000
                },
                "pickupDetails": {
                  "pickupCenter": "Abuja Depot - Wuse",
                  "pickupDate": "2014-11-25"
                },
                "images": [
                  "/images/product1.png",
                  "/images/product1.png",
                  "/images/product1.png",
                  "/images/product1.png"
                ],
                "actions": [
                  {
                    "label": "Reject",
                    "color": "#FBC756",
                    "actionType": "reject"
                  },
                  {
                    "label": "Approve",
                    "color": "cDarkGreen",
                    "actionType": "approve"
                  }
                ]
              }
            ]
          }
          ,
      ];

      return data;
    }
      

    export function ecommerceShipmentsFullData() {
        const data = [
          {
            id: 1,
            shipmentId: "SHP-012345",
            shipmentOverview: {
              shipmentId: "SHP-12345",
              shipmentType: "Regular",
              destination: "Ikeja LGA Office",
              dispatchDate: "2024-11-25",
              estimatedArrival: "2024-12-26",
            },
            productsInShipment: [
              {
                productName: "Harzadous Waste Kits",
                quantity: 50,
              },
              {
                productName: "Harzadous Waste Kits",
                quantity: 10,
              },
            ],
            driverAndVehicleDetails: {
              assignedDriver: "Oladele Adebayo",
              contactNumber: "+234-802-123-4567",
              vehicleAssigned: "Truck - TRK-00234",
            },
            shipmentTimeline: {
              createdOn: "2024-11-20 10:15 AM",
              dispatchOn: "2024-11-20 10:15 AM",
              lastUpdate: "2024-11-20 10:15 AM",
              notes: "Shipment is prioritized for urgent waste cleanup",
            },
          },
          {
            id: 2,
            shipmentId: "SHP-012346",
            shipmentOverview: {
              shipmentId: "SHP-12346",
              shipmentType: "Express",
              destination: "Victoria Island Office",
              dispatchDate: "2024-11-26",
              estimatedArrival: "2024-12-27",
            },
            productsInShipment: [
              {
                productName: "Biohazard Waste Kits",
                quantity: 30,
              },
              {
                productName: "Biohazard Waste Kits",
                quantity: 20,
              },
            ],
            driverAndVehicleDetails: {
              assignedDriver: "Emeka Okonkwo",
              contactNumber: "+234-803-456-7890",
              vehicleAssigned: "Truck - TRK-00356",
            },
            shipmentTimeline: {
              createdOn: "2024-11-21 11:30 AM",
              dispatchOn: "2024-11-21 11:30 AM",
              lastUpdate: "2024-11-21 11:30 AM",
              notes: "Urgent delivery for medical waste disposal.",
            },
          },
        ];
        return data;
      }
      


    export function ecommerceRestockFullData(){
        const data = [
            {
              id: 1,
              restockRequestId: "S12345",
              requestDetails: {
                requestId: "SHP-12345",
                productName: "Recycling Bins",
                requestedQuantity: "50 Units",
                lgaOffice: "Surulere LGA",
                requestedBy: "Chika Emeka",
                requestedDate: "21/11/2024",
              },
              stockAvailability: {
                currentStock: "120 Units Available",
              },
              approvalSection: {
                approvedQuantity: "40 [Input field]",
                approvalNotes: "Textbox for comments or explanation",
              },
              driverVehicleShippingAssignment: {
                driver: "Selected Driver ",
                vehicleAssigned: "Selected Vehicle ",
                dispatchDate: "Selected Dispatch Date",
                estimatedArrival: "Selected Estimated Arrival",
              },
            },
            {
              id: 2,
              restockRequestId: "S67890",
              requestDetails: {
                requestId: "SHP-67890",
                productName: "Waste Bins",
                requestedQuantity: "100 Units",
                lgaOffice: "Ikeja LGA",
                requestedBy: "John Doe",
                requestedDate: "15/12/2024",
              },
              stockAvailability: {
                currentStock: "80 Units Available",
              },
              approvalSection: {
                approvedQuantity: "50 [Input field]",
                approvalNotes: "Textbox for comments or explanation",
              },
              driverVehicleShippingAssignment: {
                driver: "Selected Driver",
                vehicleAssigned: "Selected Vehicle",
                dispatchDate: "Selected Dispatch Date ",
                estimatedArrival: "Selected Estimated Arrival ",
              },
            },
          ];
    return data;
    }


    export function queriesFullData(){
        const data = [
        {
            "queries": [
                {
                "id": 1,
                "queryInfo": {
                    "queryId": "QRY001",
                    "customerInfo": {
                    "clientName": "Oladele Johnson",
                    "clientPhoneNo": "+234 806 123 4567",
                    "clientEmail": "oladele.johnson@gmail.com",
                    "clientType": "Individual",
                    "queryType": "Billing",
                    "status": "Open",
                    "dateSubmitted": "22/11/2024",
                    "lastUpdated": "21/11/2024"
                    },
                    "queryDescription": "I have been charged twice for my last payment. Please assist in rectifying this."
                },
                "activityLog": [
                    {
                    "timestamp": "04/11/2024 10:00 AM",
                    "message": "Query submitted by client",
                    "severity": "low"
                    },
                    {
                    "timestamp": "04/11/2024 10:15 AM",
                    "message": "Query Assigned To Billing Team",
                    "severity": "medium"
                    },
                    {
                    "timestamp": "04/11/2024 10:30 AM",
                    "message": "Status updated to 'In Progress'",
                    "severity": "high"
                    },
                    {
                    "timestamp": "04/11/2024 11:00 AM",
                    "message": "Status Updated to 'Completed'",
                    "severity": "critical"
                    }
                ]
                },
                {
                "id": 2,
                "queryInfo": {
                    "queryId": "QRY002",
                    "customerInfo": {
                    "clientName": "Adesanya Smith",
                    "clientPhoneNo": "+234 805 234 5678",
                    "clientEmail": "adesanya.smith@email.com",
                    "clientType": "Organization",
                    "queryType": "Billing",
                    "status": "Closed",
                    "dateSubmitted": "15/11/2024",
                    "lastUpdated": "18/11/2024"
                    },
                    "Description": "There seems to be an error in the last payment processing. Please check."
                },
                "activityLog": [
                    {
                    "timestamp": "15/11/2024 09:30 AM",
                    "message": "Query submitted by client",
                    "severity": "low"
                    },
                    {
                    "timestamp": "15/11/2024 09:45 AM",
                    "message": "Query Assigned To Billing Team",
                    "severity": "medium"
                    },
                    {
                    "timestamp": "16/11/2024 10:00 AM",
                    "message": "Status updated to 'In Progress'",
                    "severity": "high"
                    },
                    {
                    "timestamp": "18/11/2024 02:30 PM",
                    "message": "Status Updated to 'Completed'",
                    "severity": "critical"
                    }
                ]
                }
            ]
            }
            
            ]
    return data;
    }


    export function ItSupportFullData(){
        const tableData = [
        {
            "tickets": [
                {
                "id": 1,
                "ticketInformation": {
                    "ticketID": "TKT1235",
                    "Priority": "High",
                    "Status": "Open",
                    "reportBy": "J.Doe",
                    "dateReported": "22/11/2024"
                },
                "issueDetails": {
                    "Category": "Server Down",
                    "description": "The primary database server is unresponsive. Users are unable to access the portal. Urgent action needed."
                },
                "activityLog": [
                    {
                    "timestamp": "15/11/2024 09:30 AM",
                    "message": "Query submitted by client",
                    "severity": "low"
                    },
                    {
                    "timestamp": "15/11/2024 09:45 AM",
                    "message": "Query Assigned To Billing Team",
                    "severity": "medium"
                    },
                    {
                    "timestamp": "16/11/2024 10:00 AM",
                    "message": "Status updated to 'In Progress'",
                    "severity": "high"
                    },
                    {
                    "timestamp": "18/11/2024 02:30 PM",
                    "message": "Status Updated to 'Completed'",
                    "severity": "critical"
                    }
                ]
                },
                {
                "id": 2,
                "ticketInformation": {
                    "ticketID": "TKT1236",
                    "Priority": "Medium",
                    "Status": "Closed",
                    "reportBy": "A.Smith",
                    "dateReported": "20/11/2024"
                },
                "issueDetails": {
                    "Category": "Database Error",
                    "description": "The user authentication system is failing intermittently. Some users are unable to log in."
                },
                "activityLog": [
                    {
                    "timestamp": "20/11/2024 08:00 AM",
                    "message": "Ticket created by client",
                    "severity": "low"
                    },
                    {
                    "timestamp": "20/11/2024 08:15 AM",
                    "message": "Ticket Assigned To Support Team",
                    "severity": "medium"
                    },
                    {
                    "timestamp": "21/11/2024 09:00 AM",
                    "message": "Issue being investigated",
                    "severity": "high"
                    },
                    {
                    "timestamp": "22/11/2024 12:00 PM",
                    "message": "Issue resolved and ticket closed",
                    "severity": "critical"
                    }
                ]
                }
            ]
            }
            
    ]
    return tableData;
    }


    export function DashboardTicket() {
        const tableData = [
            { "alertType": "Complaint", "status": "Resolved", "timeStamp": "2024-12-01 02:30 PM" },
            { "alertType": "Enquiry", "status": "Open", "timeStamp": "2024-12-02 11:15 AM" },
        ];
        
        return tableData;
    }

    export function RecentActivities() {
        const tableData = [
            { "action": "Created  Area", "stateAdmin": "John Doe", "dateTime": "Mon 26/1:55PM" },
            { "action": "Created  Area", "stateAdmin": "Jane Smith", "dateTime": "Tue 27/11:15AM" },
        ];
        
        return tableData;
    }

    // -----------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------




    export function ScheduleDropOffData() {
    // Simulating data coming from the backend
    const data = [
        {
            "id": 1,
            "stationId": "ST001",
            "stationName": "LEKKI PHASE 1",
            "address": "Oladele Johnson",
            "capacity": 1000,
            "status": "Active",
            "state": "Lagos",
            "area": "Lekki",
            "name": "Oladele Johnson",
            "email": "oladele.johnson@gmail.com",
            "phoneNo": "+234 806 123 4567",
            "lastUpdate": "2025-01-20 10:30 AM"
            },
            {
            "id": 2,
            "stationId": "ST002",
            "stationName": "LEKKI PHASE 2",
            "address": "Emeka Obi",
            "capacity": 1500,
            "status": "Inactive",
            "state": "Lagos",
            "area": "Lekki",
            "name": "Emeka Obi",
            "email": "emeka.obi@gmail.com",
            "phoneNo": "+234 806 765 4321",
            "lastUpdate": "2025-01-19 3:15 PM"
            }
    ];
    return data;
    }


    export function contentFullData() {
        const tableData = [
          {
            id: 1,
            image: "/images/ai.png",
            topic: "The AI Revolution",
            subtitle: "How Artificial Intelligence is Shaping the Future",
            orderDate: "2025-01-15",
            content: <Aiblog/>,
            likes: "1200",
            status: "Active",
            actions: "Read more",
          },
          {
            id: 2,
            image: "/images/csTrend.png",
            topic: "Cybersecurity Trends in 2025",
            subtitle: "How to Defend Against Evolving Cyber Threats",
            orderDate: "2025-01-18",
            content: <Cyberblog/>,
            likes: "980",
            status: "Inactive",
            actions: "Read more",
          },
        ];
      
        return tableData;
      }
      

    export function staffData() {
    const data = [
        {
            "id": 1,
            "staffImage": "/images/staff1.png",
            "location": "Lagos",
            "status": "Active",
            "name": "Oladele Janet",
            "staffId": "PLUTO10001",
            "role": "State Admin"
        },
        {
            "id": 2,
            "staffImage": "/images/staff2.png",
            "location": "Abuja",
            "status": "Active",
            "name": "Emeka Obi",
            "staffId": "PLUTO10002",
            "role": "Regional Admin"
        }
        ]
    return data}