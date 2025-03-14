import Image from "next/image";
import { useState } from "react";

export default function ImageUpload2({
  defaultImg,
  selectedImage,
  onImageChange,
}) {
  const [imagePreview, setImagePreview] = useState(selectedImage || defaultImg);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      onImageChange(imageUrl); // Pass image URL to parent component
    }
  };

  return (
    <div className="flex  gap-4">
      {/* Image Display */}
      <div className="w-[8vw] h-[8vw] rounded-xl bg-blue-200 overflow-hidden relative">
        <Image
          src={imagePreview}
          alt="Selected Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Upload Section */}
      <span className="flex flex-col mt-2 gap-2">
        <label className="bg-cDarkGreen p-2 text-white rounded-lg w-fit cursor-pointer">
          Upload new photo
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>

        <p className="text-gray-600 text-[0.8vw]">
          At least 800X800px recommended. <br />
          JPG or PNG is allowed.
        </p>
      </span>
    </div>
  );
}
