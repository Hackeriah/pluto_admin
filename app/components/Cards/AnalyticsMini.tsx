import Image from "next/image";

type AnalyticsMiniProps = {
  totalWasteCollected: number;
  volumeIncreasePercentage: number;
};

const img = "/vectors/incomplete_circle.svg";
const up = "/vectors/up.svg";
const down = "/vectors/down.svg";

export default function AnalyticsMini({
  totalWasteCollected,
  volumeIncreasePercentage,
}: AnalyticsMiniProps) {
  const isIncrease = volumeIncreasePercentage > 0;

  return (
    <div className="w-[48%] justify-center border rounded-xl px-[1.2vw] py-[0.8vw] ">
      <div className="flex justify-between items-center mb-[0.2vw]">
        <p className="text-[1.2vw] font-medium">
          Total Waste <br />
          Collected
        </p>

        <div className="flex items-center p-[0.6vw] border rounded-xl bg-green-100">
          <Image src={img} width={30} height={30} alt="Waste Icon" layout="responsive" />
        </div>
      </div>

      <p className="font-bold text-[2vw]">{totalWasteCollected} Tons</p>

      <div className="flex gap-[1vw] items-center ">
        <div className="size-8 items-center flex">
          <Image
            src={isIncrease ? up : down}
            width={10}
            height={10}
            layout="responsive"
            alt={isIncrease ? "Up Icon" : "Down Icon"}
          />
        </div>
        <div>
          <div className="flex gap-[0.4vw] items-center">
            <p className={`text-[0.9vw] ${isIncrease ? "text-cDarkGreen" : "text-red-500"}`}>
              {Math.abs(volumeIncreasePercentage)}% 
            </p>
            <p>{isIncrease ? "up" : "down"} from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
