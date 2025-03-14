'use client';
import PageLayout from "@/app/components/Layouts/PageLayout";

export default function Client() {
  const navData = {
    Overview: [
      {
        label: "State",
        defaultValue: "Delta",
        options: ["Abia", "Lagos", "Edo"],
      },
      {
        label: "Area",
        defaultValue: "All",
        options: ["Abia", "Lagos", "Edo"],
      },
      {
        label: "Zone",
        defaultValue: "All",
        options: ["Abia", "Lagos", "Edo"],
      },
      {
        label: "Landmark",
        defaultValue: "All",
        options: ["Abia", "Lagos", "Edo"],
      },
    ],
    "Bill & Payments": [
        {
            label: "State",
            defaultValue: "Delta",
            options: ["Abia", "Lagos", "Edo"],
          },
          {
            label: "Area",
            defaultValue: "All",
            options: ["Abia", "Lagos", "Edo"],
          },
          {
            label: "Zone",
            defaultValue: "All",
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
      title="Clients"
      dropdownData={navData}
      // newEntityLabel="New Area"
      imgSrc="/vectors/addNew.svg"
    />
  );
}
