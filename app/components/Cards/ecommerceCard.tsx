import Image from "next/image";

interface ProductProps {
  status: string;
  discount: string;
  productImage: string;
  title: string;
  price: string;
  originalPrice: string;
  colors: string[];
}

const EcommerceCard: React.FC<ProductProps> = ({
  status,
  discount,
  productImage,
  title,
  price,
  originalPrice,
  colors,
}) => {
  return (
    <div className="border rounded-2xl p-4 w-[24%]">
      <div className="flex justify-between items-center w-full h-6">
        <div className="flex gap-2">
          <div className="bg-green-500 text-white text-[0.8vw] rounded-lg items-center flex pt-[0.1vw] px-2">
            {status}
          </div>
          <div className="bg-cDarkGreen text-white text-[0.8vw] rounded-lg items-center flex pt-[0.1vw] px-2">
            {discount}
          </div>
        </div>
        <div className="w-[1.4vw] h-[1.4vw] items-center flex justify-center">
          <Image src="/vectors/love.svg" width={10} height={10} layout="responsive" alt="" />
        </div>
      </div>

      <div>
        <Image src={productImage} width={100} height={100} layout="responsive" alt={title} />
      </div>

      <div className="flex flex-col gap-1">
        <p>{title}</p>
        <div className="flex gap-2">
          <p className="text-cDarkGreen">{price}</p>
          <p className="line-through">{originalPrice}</p>
        </div>

        <div className="flex justify-between mt-2">
          <div className="flex gap-2 rounded-full border border-cDarkGreen p-2 text-gray-800 text-[1vw] items-center">
            <p>Colours</p>
            {colors.map((color, index) => (
              <p key={index} className={`w-[0.6vw] h-[0.6vw] ${color} rounded-full p-2`}></p>
            ))}
          </div>
          <div className="flex gap-2">
            <button className="rounded-full w-[2.4vw] items-center flex justify-center h-[2.4vw] border-2 p-[0.6vw]">
              <Image src="/vectors/delete.svg" width={18} height={18} alt="Delete" />
            </button>
            <button className="rounded-full w-[2.4vw] items-center flex justify-center h-[2.4vw] border-2 p-[0.6vw]">
              <Image src="/vectors/edit.svg" width={18} height={18} alt="Edit" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceCard;
