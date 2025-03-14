'use client';
import PageLayout from "@/app/components/Layouts/PageLayout";

export default function Ecommerce() {
  const navData = {
    "Products": [
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
    ],
    Orders: [
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
    ],
    Shipments: [
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
    ],
    Restock: [
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
    ],
    Analytics: [
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
    ],
  };

  return (
    <PageLayout
      title="Ecommerce Management"
      dropdownData={navData}
    //   newEntityLabel="New Area"
      imgSrc="/vectors/addNew.svg"
    />
  );
}
