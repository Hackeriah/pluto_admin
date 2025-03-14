import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { BiTargetLock } from "react-icons/bi";
<BiTargetLock />

interface SidebarProps {
  isSidebarExpanded: boolean;
}

const dashboard = "/vectors/dashboard.svg";
const state = "/vectors/state.svg";
const area = "/vectors/area.svg";
const zone = "/vectors/zone.svg";
const schedule = "/vectors/schedule.svg";
const request = "/vectors/request.svg";
const staff = "/vectors/staff.svg";
const client = "/vectors/client.svg";
const ecommerce = "/vectors/ecommerce.svg";
const query = "/vectors/query.svg";
const content = "/vectors/content.svg";
const ITsupport = "/vectors/ITsupport.svg";
const logout = "/vectors/logout.svg";
const landmark = "/vectors/landmark.svg"

const Sidebar = ({ isSidebarExpanded }: SidebarProps) => {
  const pathname = usePathname();
  const role = pathname ? pathname.split("/")[1] : "";

  const getIcon = (item: string): string => {
    switch (item.toLowerCase()) {
      case "dashboard":
        return dashboard;
      case "states":
        return state;
      case "areas":
        return area;
      case "zone":
        return zone;
      case "schedule":
        return schedule;
      case "request":
        return request;
      case "staff":
        return staff;
      case "client":
        return client;
      case "ecommerce":
        return ecommerce;
      case "queries":
        return query;
      case "Content":
          return content;
      case "itsupport":
        return ITsupport;
      case "logout":
        return logout;
      case "landmark":
        return landmark;
      default:
        return dashboard;
    }
  };

  const getMenuItems = (): string[] => {
    switch (role) {
      case "system_admin":
        return [
          "Dashboard",
          "States",
          "Areas",
          "Zone",
          "Schedule",
          "Request",
          "Staff",
          "Clients",
          "Ecommerce",
          "Queries",
          "Content"
        ];
      case "state_admin":
        return [
          "Dashboard",
          "Areas",
          "Zone",
          "Schedule",
          "Request",
          "Staff",
          "Clients",
          "Ecommerce",
          "Queries",
          "Content"
        ];
      case "area_admin":
        return [
          "Dashboard",
          "Zones",
          "Schedule",
          "Request",
          "Staff",
          "Clients",
          "Ecommerce",
          "Queries",
          "Content"
        ];
      case "zonal_admin":
        return [
          "Dashboard",
          "Landmark",
          "Schedule",
          "Request",
          "Staff",
          "Clients",
          "Ecommerce",
          "Queries",
          "Content",
        ];
      default:
        return [];
    }
  };

  if (!role) {
    return null;
  }

  return (
    <aside
      className={`  flex flex-col justify-between h-full bg-cDarkGreen text-white py-[2vh] transition-all duration-300 ease-in-out ${
        isSidebarExpanded ? "w-[12vw]" : "w-fit"
      }`}
    >
      <div  className="">
        <ul>
          {getMenuItems().map((item, index) => {
            const isActive = pathname.includes(item.toLowerCase());

            return (
              <li key={index}>
                <Link href={`/${role}/${item.toLowerCase()}`}>
                  <div className="flex pr-[1.2vw] gap-[2vh] group">
                    <div
                      className={`w-[0.001vw] ${
                        isActive ? "w-[0.4vw]" : "group-hover:w-[0.4vw]"
                      } h-[40px] rounded-r-xl bg-vdark transition-all duration-300 ease-in-out`}
                    ></div>
                    <div
                      className={`w-full flex py-1 px-4 text-lg ${
                        isActive ? "bg-vdark" : "hover:bg-vdark"
                      } rounded-xl gap-2 ${
                        isSidebarExpanded ? "block" : "hidden"
                      }`}
                    >
                      <Image
                        src={getIcon(item)}
                        alt={item}
                        width={18}
                        height={18}
                      />
                      <p className="pt-1">{item}</p>
                    </div>
                    <div
                      className={`flex items-center ${
                        isSidebarExpanded
                          ? "hidden bg-none"
                          : "block hover:bg-vdark px-[1.2vw] rounded-lg"
                      }`}
                    >
                      <Image
                        src={getIcon(item)}
                        alt=""
                        width={18}
                        height={18}
                        layout="responsive"
                      />
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="border-t gap-[1vw]  h-fit flex flex-col">
        <div className="flex pr-[1.2vw] gap-[5%]  group">
          <div className="w-[0.001vw] group-hover:w-[0.4vw] h-[40px] rounded-r-xl bg-vdark transition-all duration-300 ease-in-out"></div>
          <Link href={`/${role}/itsupport`}
            className={`w-fit  flex py-1 px-4 text-lg hover:bg-vdark rounded-xl gap-2 ${
              isSidebarExpanded ? "block" : "hidden"
            }`}
          >
            <Image src={ITsupport} alt="" width={18} height={18} />
            <p className="pt-1 text-nowrap">IT Support</p>
          </Link>
          <div
            className={`flex items-center ${
              isSidebarExpanded
                ? "hidden bg-none"
                : "block hover:bg-vdark px-[1.2vw] rounded-lg"
            }`}
          >
            <Image src={ITsupport} alt="" width={18} height={18} />
          </div>
        </div>
        <div className="flex pr-[1.2vw] gap-[5%] group">
          <div className="w-[0.001vw] group-hover:w-[0.4vw] h-[40px] rounded-r-xl bg-vdark transition-all duration-300 ease-in-out"></div>
          <div
            className={`w-full flex py-1 px-4 text-lg hover:bg-vdark rounded-xl gap-2 ${
              isSidebarExpanded ? "block" : "hidden"
            }`}
          >
            <Image src={logout} alt="" width={18} height={18} />
            <p className="pt-1">Log Out</p>
          </div>
          <div
            className={`flex items-center ${
              isSidebarExpanded
                ? "hidden bg-none"
                : "block hover:bg-vdark px-[1.2vw] rounded-lg"
            }`}
          >
            <Image src={logout} alt="" width={18} height={18} />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
