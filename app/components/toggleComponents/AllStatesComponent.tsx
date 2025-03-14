'use client';
import VerticalCards from "../Cards/VerticalCards";

interface CardData {
  residential: number;
  business: number;
  government: number;
  state:string;
  stateCode:string;
  areas: number;
  volume: number;
  volumeIncreasePercentage: number;
  collectionFrequency: string;
  successRate: number;
  staffAssigned: number;
  trucks: number;
}

const cardData: CardData[] = [
  {
    residential: 50,
    business: 20,
    government: 10,
    state:"Edo",
    stateCode:"STOO01",
    areas: 5,
    volume: 100,
    volumeIncreasePercentage: 5,
    collectionFrequency: "Weekly",
    successRate: 90,
    staffAssigned: 15,
    trucks: 4,
  },
  {
    residential: 60,
    business: 25,
    government: 12,
    state:"Ondo",
    stateCode:"STOO05",
    areas: 6,
    volume: 120,
    volumeIncreasePercentage: 7,
    collectionFrequency: "Monthly",
    successRate: 85,
    staffAssigned: 18,
    trucks: 5,
  },
  {
    residential: 40,
    business: 18,
    government: 9,
    state:"Akwa Ibom",
    stateCode:"STOO06",
    areas: 4,
    volume: 80,
    volumeIncreasePercentage: 4,
    collectionFrequency: "Monthly",
    successRate: 88,
    staffAssigned: 12,
    trucks: 3,
  },
  {
    residential: 55,
    business: 22,
    government: 11,
    state:"Oyo",
    stateCode:"STOO07",
    areas: 5,
    volume: 110,
    volumeIncreasePercentage: 6,
    collectionFrequency: "Weekly",
    successRate: 92,
    staffAssigned: 16,
    trucks: 4,
  },
  {
    residential: 45,
    business: 19,
    government: 8,
    state:"Delta",
    stateCode:"STOO08",
    areas: 4,
    volume: 90,
    volumeIncreasePercentage: 3,
    collectionFrequency: "Monthly",
    successRate: 87,
    staffAssigned: 14,
    trucks: 4,
  },
];

export default function AllStatesComponent(): JSX.Element {
  return (
    <div className="ml-4 flex flex-wrap gap-4">
      {cardData.map((card, index) => (
        <VerticalCards

          key={index} 
          residential={card.residential}
          business={card.business}
          government={card.government}
          state={card.state}
          areas={card.areas}
          stateCode={card.stateCode}
          volume={card.volume}
          volumeIncreasePercentage={card.volumeIncreasePercentage}
          collectionFrequency={card.collectionFrequency}
          successRate={card.successRate}
          staffAssigned={card.staffAssigned}
          trucks={card.trucks}
        />
      ))}
    </div>
  );
}
