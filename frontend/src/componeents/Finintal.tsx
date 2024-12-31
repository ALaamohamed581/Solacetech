import DetailsCard from "./reusable/DeatilsCard";

const Finintal = () => {
  return (
    <>
      {" "}
      <DetailsCard title="Basic Information">
        <DetailsCard.Row
          properties={[
            { name: "Bank Name", value: "CIB" },
            { name: "IBAN", value: "12346546413216446" },
            { name: "Title", value: "Mr." },
          ]}
        />
      </DetailsCard>
    </>
  );
};

export default Finintal;
