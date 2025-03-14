'use client';
import PageLayout from "@/app/components/Layouts/PageLayout";

export default function Requests() {
  const navData = {
    Overview: [
      {
        label: "State",
        defaultValue: "Delta",
        options: ["Abia", "Lagos", "Edo"],
      },
      {
        label: "Area",
        defaultValue: "Ugbowo",
        options: ["Abia", "Lagos", "Edo"],
      },
      {
        label: "Zone",
        defaultValue: "Ovia North East",
        options: ["Abia", "Lagos", "Edo"],
      },
      {
        label: "Landmark",
        defaultValue: "All",
        options: ["Abia", "Lagos", "Edo"],
      },
    ],
  };

  return (
    <PageLayout
      title="Request Management"
      dropdownData={navData}
      // newEntityLabel="request"
      imgSrc="/vectors/addNew.svg"
    />
  );
}
