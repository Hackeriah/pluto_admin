'use client';
import { PiCaretDownBold } from 'react-icons/pi';
import { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

interface DropdownItem {
  label: string;
}

interface AnalyticsGraphProps {
  title: string;
}

export default function AnalyticsGraph({ title }: AnalyticsGraphProps) {
  const data = {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ],
    datasets: [
      {
        data: [3800, 6000, 5700, 3800, 3900, 6400, 5000, 5004, 6600, 6000, 5900, 4500],
        label: 'Monthly Revenue',
        borderColor: '#319D38',
        borderWidth: 2,
        tension: 0.1,
        fill: false,
        pointBackgroundColor: '#319D38',
        pointBorderColor: '#319D38',
        pointHoverBackgroundColor: '#319D38',
        pointHoverBorderColor: '#319D38',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        borderColor: '#319D38',
        borderWidth: 2,
        tension: 0.1,
        shadowOffsetX: 0,
        shadowOffsetY: 50,
        shadowBlur: 100,
        shadowColor: '#319D38',
      },
    },
  };

  const dropdownItems: DropdownItem[] = [
    { label: 'Requests' },
    { label: 'Staffs' },
    { label: 'Clients' },
    { label: 'Queries' },
    { label: 'Orders' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('Orders');
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-full border rounded-xl p-2">
      <div className="flex justify-end gap-[1.5vw] items-center">
        <div className='items-start pl-4 w-full'><p className=''>{title}</p></div>
        <div className="relative inline-block text-left" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="inline-flex items-center px-4 py-2 text-[1.vw] text-sm font-medium hover:bg-gray-200 rounded-xl focus:outline-none"
          >
            <p className="text-[1.2vw]">{selectedOption}</p>
            <PiCaretDownBold
              className={`ml-2 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-[10vw] shadow-2xl rounded-md z-10">
              <ul className="py-1 rounded-xl">
                {dropdownItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleOptionClick(item.label)}
                      className="bg-white  block px-4 py-2 w-full text-left hover:text-white text-black hover:bg-cDarkGreen"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <Line className="w-full h-full" data={data} options={options} />
    </div>
  );
}
