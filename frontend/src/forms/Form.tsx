import { useForm } from "react-hook-form";
import { Box, Button, MenuItem } from "@mui/material";

import { defaultValues } from "../mockData/defaultvalues";
import { FormValues } from "../types/forminputs";
import FormcCopmpones from "../componeents/reusable/FormcCopmpones";
import { personalDataSections } from "../mockData/userData";
const [{ rows: data }] = personalDataSections;
console.log(data);
const Form = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isLoading },
  } = useForm<FormValues>({
    defaultValues: defaultValues,
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        "& > :not(style)": { m: 1, width: "100%" },
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
      }}
      noValidate
      autoComplete="off"
    >
      <FormcCopmpones
        name="firstName"
        label="First Name"
        control={control}
        error={!!errors.firstName?.message}
        helperText={errors.firstName?.message ? "First name is required" : ""}
        rules={{
          required: "First name is required",
        }}
      />

      <FormcCopmpones
        name="familyName"
        label="Family Name"
        control={control}
        error={!!errors.familyName?.message}
        helperText={errors.familyName?.message ? "Family name is required" : ""}
        rules={{
          required: "Family name is required",
        }}
      />

      <FormcCopmpones
        name="fatherName"
        label="Father Name"
        control={control}
        error={!!errors.fatherName?.message}
        helperText={errors.fatherName?.message ? "Father name is required" : ""}
        rules={{
          required: "Father name is required",
        }}
      />

      <FormcCopmpones
        name="grandfatherName"
        label="Grandfather Name"
        control={control}
        error={!!errors.grandfatherName?.message}
        helperText={
          errors.grandfatherName?.message ? "Grandfather name is required" : ""
        }
        rules={{
          required: "Grandfather name is required",
        }}
      />

      <FormcCopmpones
        name="dependants"
        label="Dependants"
        control={control}
        error={!!errors.dependants?.message}
        helperText={errors.dependants?.message ? "Dependants are required" : ""}
        type="number"
        rules={{
          required: "Dependants are required",
        }}
      />

      <FormcCopmpones
        name="maritalStatus.name"
        label="Marital Status"
        control={control}
        error={!!errors.maritalStatus?.message}
        helperText={
          errors.maritalStatus?.message ? "Marital status is required" : ""
        }
        rules={{
          required: "Marital status is required",
        }}
        select
      >
        <MenuItem value="Single">Single</MenuItem>
        <MenuItem value="Married">Married</MenuItem>
        <MenuItem value="Divorced">Divorced</MenuItem>
      </FormcCopmpones>

      <FormcCopmpones
        name="localizedName.firstName"
        label="Localized First Name"
        control={control}
        error={!!errors.localizedName?.message}
        helperText={
          errors.localizedName?.message
            ? "Localized first name is required"
            : ""
        }
        rules={{
          required: "Localized first name is required",
        }}
      />

      <FormcCopmpones
        name="localizedName.familyName"
        label="Localized Family Name"
        control={control}
        error={!!errors.localizedName?.message}
        helperText={
          errors.localizedName?.message
            ? "Localized family name is required"
            : ""
        }
        rules={{
          required: "Localized family name is required",
        }}
      />

      <Button
        disabled={!isDirty || isLoading}
        variant="contained"
        color="primary"
        type="submit"
        sx={{ mt: 2, width: "auto" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Form;
