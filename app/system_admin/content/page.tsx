'use client';
import PageLayout from "@/app/components/Layouts/PageLayout";

export default function Contents() {
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
      title="Content Management"
      dropdownData={navData}
      // newEntityLabel="request"
      imgSrc="/vectors/addNew.svg"
    />
  );
}
