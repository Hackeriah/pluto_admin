import HorizontalCards from "../Cards/horizontalCards";
export default function LandmarkComponent() {

  const cardData = [
    {
      id:1,
      residential: 45,
      business: 10,
      government: 5,
      landmarkValue:2,
      volume: 120,
      volumeIncreasePercentage: 15,
      collectionFrequency: "Weekly",
      successRate: 98,
      staffAssigned: 12,
      trucks: 5,
      response: 3,
      creationCost:30,
      landmark:"Landmark03",
      LandmarkName:"Iya mopol",
      landmarkCode:"L003",
      isZoneLandmark: true,
    },
    {
      id:2,
      residential: 65,
      business: 20,
      government: 15,
      landmarkValue:3,
      volume: 150,
      volumeIncreasePercentage: 12,
      collectionFrequency: "Weekly",
      successRate: 94,
      staffAssigned: 15,
      trucks: 7,
      response: 4,
      creationCost:340,
      landmark:"Landmark02",
      LandmarkName:"Iya mopol",
      landmarkCode:"L008",
      place:"landmark2",
      isZoneLandmark: true,
    },
    {
      id:3,
      residential: 70,
      business: 25,
      government: 10,
      landmarkValue:4,
      volume: 110,
      volumeIncreasePercentage: 10,
      collectionFrequency: "Monthly",
      successRate: 90,
      staffAssigned: 10,
      trucks: 6,
      response: 2,
      creationCost:30,
      landmark:"Landmark03",
      LandmarkName:"Iya mopol",
      landmarkCode:"L003",
      place:"Landmark3",
      isZoneLandmark: true,
    },
    
  ];
  
  return (
    <div className="flex flex-wrap justify-between pl-4">
      {cardData.map((card, index) => (
        
          <HorizontalCards {...card} key={card.id} />
        
      ))}
    </div>
  )
}
