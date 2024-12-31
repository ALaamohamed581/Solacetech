import { Button } from "@mui/material";

interface Property {
  name: string;
  value: string;
}
interface CardProps {
  title: string;
  children: React.ReactNode;
}
const Row = ({ properties }: { properties: Property[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 text-center sm:text-[12px] md:text-start">
    {properties.map((prop: Property, index: number) => (
      <span key={index} className="mr-4">
        <div className="text-[8px] text-slate-400">{prop.name}</div>
        {prop.value}
      </span>
    ))}
  </div>
);

const DetailsCard = ({ title, children }: CardProps) => {
  return (
    <div className="md:flex-col shadow-[#EEEEEE80] shadow-md p-12 rounded-3xl w-full min-h-[196px] max-h-fit text-wrap">
      <div className="min-w-[250px]">
        <div className="flex justify-between items-center">
          <h4>{title}</h4>
          <Button
            style={{
              backgroundColor: "#0F6CBD",
              color: "white",
              width: "1rem",
              fontSize: "14px",
            }}
            className="text-white"
          >
            Edit
          </Button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

 
DetailsCard.Row = Row;

export default DetailsCard;
