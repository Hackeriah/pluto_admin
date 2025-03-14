
import AnalyticsMini from "../Cards/AnalyticsMini";
import AnalyticsGraph from "../Charts/AnalyticsGraph";
import Revenue from "../Cards/revenue";

interface WasteData {
  totalWasteCollected: number;
  volumeIncreasePercentage: number;
}

export default function ZoneAnalytics() {
  const revenueData = [
    {
      location: "Lagos State",
      percentage: 100,
      amount: "₦50,000,000",
    },
    {
      location: "Ogun State",
      percentage: 70,
      amount: "₦35,000,000",
    },
    {
      location: "Abuja",
      percentage: 90,
      amount: "₦45,000,000",
    },
    
  ];

  const wasteData: WasteData[] = [
    { totalWasteCollected: 1250, volumeIncreasePercentage: 5 }, 
    { totalWasteCollected: 900, volumeIncreasePercentage: -3 }, 
    { totalWasteCollected: 1100, volumeIncreasePercentage: 12 }, 
    { totalWasteCollected: 750, volumeIncreasePercentage: -7 }, 
  ];

  return (
    <div className="w-full pl-4">
      <div className="w-full flex mb-4">
        <div className="w-1/2 flex flex-wrap gap-2">
          {wasteData.map((data, index) => (
            <AnalyticsMini
              key={index} 
              totalWasteCollected={data.totalWasteCollected}
              volumeIncreasePercentage={data.volumeIncreasePercentage}
            />
          ))}
        </div>
        <div className="w-1/2">
          <AnalyticsGraph title="Trends" />
        </div>
      </div>
      <Revenue data={revenueData} />
    </div>
  );
}
