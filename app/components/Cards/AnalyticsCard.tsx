import { ReactNode } from 'react';

interface AnalyticsCardProps {
  title: string;
  count: number | string;
  icon: ReactNode;
  percentage: number | string;
  percenText: string;
  up: ReactNode;
}

const AnalyticsCard = ({
  title,
  count,
  icon,
  percentage,
  percenText,
  up,
}: AnalyticsCardProps) => {
  return (
    <div className="border p-4 rounded-lg w-[25%] h-fit">
      <div className="flex justify-between">
        <h3 className="text-[1.vw]">{title}</h3>
        {icon}
      </div>
      <div>
        <p className="text-[3vw] font-bold mt-1">{count}</p>
        <span className="flex gap-[0.8vw] items-center">
          {up}
          <p className="text-[1.2vw]">{percentage}</p>
          <p className="text-[1.2vw] font-normal">{percenText}</p>
        </span>
      </div>
    </div>
  );
};

export default AnalyticsCard;
