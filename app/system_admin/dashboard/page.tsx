'use client'
import BasicDateCalendar from "@/app/components/calendars/BasicDateCalendar";
import AnalyticsCard from "@/app/components/Cards/AnalyticsCard";
import AnalyticsGraph from "@/app/components/Charts/AnalyticsGraph";
import { DashTable } from "@/app/components/Tables/DashTable";
import { RecentActivities,  DashboardTicket } from "@/app/components/Tables/TableData";
import { RecentActivitiesHeader, DashboardTicketHeader } from "@/app/components/Tables/TableHeaders";
import GoogleCalendarEmbed from "@/app/utils/googleCalendarEmbed";
import Image from "next/image";


const tableData = [
  {
    id: 1,
    isChecked: false, 
    user: {
      name: "John Doe",
      image: "/path/to/image.jpg", 
    },
    email: "john@example.com", 
    role: "Admin", 
    isActive: true, 
  },
  {
    id: 2,
    isChecked: true,
    user: {
      name: "Jane Smith",
      image: "/path/to/image2.jpg",
    },
    email: "jane@example.com",
    role: "User",
    isActive: false,
  },
  
];

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

const Dashboard = () => {
  return (
   
    <div className=" w-full h-full p-[1vw]">
      <p className=" pb-3">Hi, System Admin</p>
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
      
      <div className=" my-[2vh] mb-[4vh] flex w-full gap-[1vw] ">
        <div className="w-[70%] rounded-xl">
          <AnalyticsGraph />
        </div>
        <div className="w-[30%] border rounded-xl ">
          <BasicDateCalendar />
        </div>
      </div>
      <div className="w-full flex justify-between">
        <DashTable viewlink='View All Activities' title='Recent Activities' headers={DashboardTicketHeader()} data={DashboardTicket()}/>
        <DashTable viewlink='View All Queries' title='Tickets' headers={RecentActivitiesHeader()} data={RecentActivities()}/>
      </div>

      <GoogleCalendarEmbed/>
      
    </div>
  );
};

export default Dashboard;
