'use client';
import PageLayout from "@/app/components/Layouts/PageLayout";

export default function Schedule() {
  const navData = {
    Pickup: [
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
    ],
    Dropoff: [
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
    ],
  };

  return (
    <PageLayout
      title="Schedule & Calendar"
      dropdownData={navData}
    //   newEntityLabel="New State"
      imgSrc="/vectors/addNew.svg"
    />
  );
}
