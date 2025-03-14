import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import { PiCaretDownBold } from "react-icons/pi";
import { useState, useEffect, useRef, MouseEvent } from "react";
import Link from 'next/link';

const avatar = '/vectors/admin_avatar.svg';
const logo = '/vectors/loginLogo.svg';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleToggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="z-10 shadow border-b bg-white justify-between h-[10vh] w-full px-[2vw] flex fixed">
      <div className="flex items-center text-4xl gap-[2vw]">
        <IoMdMenu className="text-cDarkGreen cursor-pointer" onClick={toggleSidebar} />
        <div className="w-[55%] h-[100%] items-center flex">
          <Image src={logo} width={30} height={30} alt="Logo" layout="responsive" />
        </div>
      </div>

      <div
        className="my-[0.6vw] flex items-center gap-2 pr-[10px] w-[90px] bg-cLGreen rounded-[35px] cursor-pointer hover:bg-cDarkGreen group justify-center relative"
        onClick={handleToggleDropdown}
        ref={dropdownRef}
      >
        <Image src={avatar} height={40} width={40} className="rounded-[50%]" alt="Profile Avatar" />
        <PiCaretDownBold className="text-2xl text-cDarkGreen hover:text-white" />

        {isDropdownOpen && (
          <div className={`absolute top-[6.6vh] right-0 mt-2 w-[12vw] bg-[#EAF5EB] rounded-tr-2xl shadow-lg transition-all duration-300 transform ${
            isDropdownOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}>
            <div className='border-b-green-300 border-solid border-b p-[0.6vw] flex gap-[0.8vw]'>
              <Image src={avatar} height={30} width={30} className="cursor-pointer rounded-[50%]" alt="Profile" />
              <div className='text-[0.9vw]'>
                <p className='font-medium'>Jane Doe</p>
                <p>janedoe@gmail.com</p>
              </div>
            </div>

            <div className='flex flex-col'>
              <Link className='flex items-center hover:bg-cDarkGreen hover:text-white px-[1vw] h-[2.1vw] text-justify' href=''>My Profile</Link>
              <Link className='flex items-center hover:bg-cDarkGreen hover:text-white px-[1vw] h-[2.1vw] text-justify' href=''>Account & Payment</Link>
              <Link className='flex items-center hover:bg-cDarkGreen hover:text-white px-[1vw] h-[2.1vw] text-justify' href=''>Security</Link>
              <Link className='flex items-center hover:bg-cDarkGreen hover:text-white px-[1vw] h-[2.1vw] text-justify' href=''>Legal Agreements</Link>
              <Link className='flex items-center hover:bg-cDarkGreen hover:text-white px-[1vw] h-[2.1vw] text-justify' href=''>Contact Us</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
