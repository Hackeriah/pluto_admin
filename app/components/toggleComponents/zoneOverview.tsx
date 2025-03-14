import HorizontalCards from "../Cards/horizontalCards"

export default function ZoneOverview() {
  
  const cardData = [
    {
      residential: 45,
      business: 10,
      government: 5,
      zone: "Amene",
      zoneCode:"z001",
      landmarkName:"landmarks",
      landmarkValue:1,
      volume: 120,
      volumeIncreasePercentage: 15,
      collectionFrequency: "Weekly",
      successRate: 98,
      staffAssigned: 12,
      trucks: 5,
      response: 3,
      isZone: true,
    },
    {
      residential: 65,
      business: 20,
      government: 15,
      zoneCode: "Z002",
      landmarkName:"landmarks",
      landmarkValue:2,
      zone: "Westside",
      volume: 150,
      volumeIncreasePercentage: 12,
      collectionFrequency: "Weekly",
      successRate: 94,
      staffAssigned: 15,
      trucks: 7,
      response: 4,
      isZone: true,
    },
    {
      residential: 70,
      business: 25,
      government: 10,
      zoneCode: "z003",
      zone: "Eastside",
      landmarkName:"landmarks",
      landmarkValue:3,
      volume: 110,
      volumeIncreasePercentage: 10,
      collectionFrequency: "Monthly",
      successRate: 90,
      staffAssigned: 10,
      trucks: 6,
      response: 2,
      isZone: true,

    },
    
  ];
  
  return (
    <div className="flex flex-wrap justify-between pl-4">
      {cardData.map((card, index) => (
        
          <HorizontalCards {...card} key={card.zone} />
        
      ))}
    </div>
  )
}
