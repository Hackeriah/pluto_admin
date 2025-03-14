import Image from "next/image";
import { useState } from "react";

export default function ImageUpload({ defaultImg, selectedImage, onImageChange }) {
  const [imagePreview, setImagePreview] = useState(selectedImage || defaultImg);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      onImageChange(imageUrl); 
    }
  };

  return (
    <div className="flex flex-col gap-4">
      
      <div className="relative rounded-2xl w-[16vw] h-[16vw]">
        <Image src={imagePreview} className="rounded-xl" layout="fill" objectFit="cover" alt="Selected Image" />
      </div>
      
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
          At least 800X800 px recommended. <br />
          JPG or PNG is allowed.
        </p>
      </span>
    </div>
  );
}
