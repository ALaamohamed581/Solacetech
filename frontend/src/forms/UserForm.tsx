import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import DetailsCard from "../componeents/reusable/DeatilsCard";

interface FormInput {
  label: string;
  value: string;
  name: string;
}

const UserForm = () => {
  const [formData, setFormData] = useState<FormInput[]>([
    { label: "Name", value: "", name: "name" },
    { label: "Email", value: "", name: "email" },
    { label: "Age", value: "", name: "age" },
  ]);

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) =>
      prevData.map((field) =>
        field.name === name ? { ...field, value } : field
      )
    );
  };

  const computedProperties = formData.map(({ label, value }) => ({
    name: label,
    value: value || "N/A",
  }));

  const handleSubmit = () => {
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="p-6">
      <DetailsCard title="User Details">
        <div className="gap-4 grid mt-4">
          {formData.map(({ label, value, name }) => (
            <TextField
              key={name}
              label={label}
              value={value}
              onChange={(e) => handleInputChange(name, e.target.value)}
              fullWidth
            />
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{ marginTop: "1rem" }}
          >
            Submit
          </Button>
        </div>
      </DetailsCard>
      <DetailsCard.Row properties={computedProperties} />
    </div>
  );
};

export default UserForm;
