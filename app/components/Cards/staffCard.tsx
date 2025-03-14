import Image from "next/image";
import { MdLocationPin } from "react-icons/md";

interface StaffCardProps {
  location: string;
  status: string;
  staffImage: string;
  name: string;
  staffId: string;
  role: string;
}

const StaffCard: React.FC<StaffCardProps> = ({ location, status, staffImage, name, staffId, role }) => {
  let statusStyles = "";

  if (status === "Active") {
    statusStyles = "bg-cDarkGreen text-white";
  } else if (status === "Suspended") {
    statusStyles = "bg-[#FBC756] text-black";
  } else if (status === "Deactivated") {
    statusStyles = "bg-[#D72323] text-white";
  }

  return (
    <div className="border flex flex-col rounded-2xl w-[18.5%] gap-4 p-4">
      <div className="flex items-center justify-between">
        <p>{location}</p>
        <div className={`rounded-md pt-1 items-center flex justify-center w-fit p-[0.1vw] px-[0.6vw] ${statusStyles}`}>
          <p className="text-[0.5vw]">{status}</p>
        </div>
      </div>

      <div className="items-center">
        <Image
          className="rounded-xl"
          src={staffImage}
          width={50}
          height={50}
          layout="responsive"
          alt={name}
        />
      </div>

      <div>
        <p className="text-1.2vw">{name}</p>
        <p className="text-[0.8vw] text-gray-800">ID: {staffId}</p>
      </div>

      <div className="flex justify-between">
        <div className="rounded-3xl flex gap-[1.2vw] border-2 border-green-200 py-1 px-2 items-center">
          <MdLocationPin />
          <p>{role}</p>
        </div>
        <button className="rounded-full border-2 w-[2.4vw] h-[2.4vw] items-center justify-center flex p-[0.6vw]">
          <Image src="/vectors/edit.svg" width={15} height={15} alt="Edit" />
        </button>
      </div>
    </div>
  );
};

export default StaffCard;
