'use client';
import PageLayout from "@/app/components/Layouts/PageLayout";

export default function Queries() {
  const navData = {
    Overview: [
      {
        label: "State",
        defaultValue: "Delta",
        options: ["Abia", "Lagos", "Edo"],
      },
      
    ],
  };

  return (
    <PageLayout
      title="Queries Management"
      dropdownData={navData}
      // newEntityLabel="request"
      imgSrc="/vectors/addNew.svg"
    />
  );
}
