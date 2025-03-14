import HorizontalCards from "../Cards/horizontalCards"

export default function AllAreaComponent() {
  const cardData = [
    {
      residential: 45,
      business: 10,
      government: 5,
      zone: 1,
      areaZoneName:"zone",
      areaZoneNameValue:1,
      area: "Downtown",
      volume: 120,
      volumeIncreasePercentage: 15,
      collectionFrequency: "Weekly",
      successRate: 98,
      staffAssigned: 12,
      trucks: 5,
      response: 3,
      areaCode:"Ar001",
    },
    {
      residential: 65,
      business: 20,
      government: 15,
      zone: 2,
      areaZoneName:"zone",
      areaZoneNameValue:2,
      area: "Westside",
      volume: 150,
      volumeIncreasePercentage: 12,
      collectionFrequency: "Weekly",
      successRate: 94,
      staffAssigned: 15,
      trucks: 7,
      response: 4,
      areaCode:"Ar003",
    },
    {
      residential: 70,
      business: 25,
      government: 10,
      zone: 3,
      areaZoneName:"zone",
      areaZoneNameValue:3,
      area: "Eastside",
      volume: 110,
      volumeIncreasePercentage: 10,
      collectionFrequency: "Monthly",
      successRate: 90,
      staffAssigned: 10,
      trucks: 6,
      response: 2,
      areaCode:"Ar004",
    },
    {
      residential: 80,
      business: 30,
      government: 20,
      zone: 4,
      areaZoneName:"zone",
      areaZoneNameValue:4,
      area: "Northside",
      volume: 140,
      volumeIncreasePercentage: 8,
      collectionFrequency: "Weekly",
      successRate: 92,
      staffAssigned: 18,
      trucks: 8,
      response: 5,
      areaCode:"Ar005",
    },
    {
      residential: 90,
      business: 40,
      government: 25,
      zone: 5,
      areaZoneName:"zone",
      areaZoneNameValue:5,
      area: "Southside",
      volume: 130,
      volumeIncreasePercentage: 5,
      collectionFrequency: "Daily",
      successRate: 89,
      staffAssigned: 20,
      trucks: 9,
      response: 6,
      areaCode:"Ar006",
    },
    {
      residential: 100,
      business: 50,
      government: 30,
      zone: 6,
      areaZoneName:"zone",
      areaZoneNameValue:6,
      area: "Uptown",
      volume: 160,
      volumeIncreasePercentage: 18,
      collectionFrequency: "Weekly",
      successRate: 96,
      staffAssigned: 22,
      trucks: 10,
      response: 7,
      areaCode:"Ar007",
    }
  ];
  
  return (
    <div className="flex flex-wrap justify-between pl-4">
      {cardData.map((card, index) => (
        
          <HorizontalCards {...card} key={card.area} />
        
      ))}
    </div>
  )
}
