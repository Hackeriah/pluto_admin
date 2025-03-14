'use client';
import PageLayout from "@/app/components/Layouts/PageLayout";

export default function Staff() {
  const navData = {
    "Overview": [],
    
  };

  return (
    <PageLayout
      title="Staff Management"
      dropdownData={navData}
    //   newEntityLabel="New Area"
      imgSrc="/vectors/addNew.svg"
    />
  );
}
