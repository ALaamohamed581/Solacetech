import DetailsCard from "./reusable/DeatilsCard";

import { personalDataSections } from "../mockData/userData";

const PersonalData = () => {
  return (
    <>
      {personalDataSections.map((section, index) => (
        <DetailsCard key={index} title={section.title}>
          {section.rows.map((row, rowIndex) => (
            <DetailsCard.Row key={rowIndex} properties={row} />
          ))}
        </DetailsCard>
      ))}
    </>
  );
};

export default PersonalData;
