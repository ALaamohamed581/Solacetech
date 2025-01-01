import moment from "moment";
import { personalDataSections } from "./userData";

const [{ rows }] = personalDataSections;
const data = rows.map((el) => el.map((obj) => obj.value)).flat(1);

export const defaultValues = {
  dependants: parseInt(data[19]),
  familyName: data[6] as string,
  firstName: data[3] as string,
  fatherName: data[4] as string,
  localizedName: {
    fatherName: data[8] as string,
    firstName: data[7] as string,
    familyName: data[10] as string,
    grandfatherName: data[9] as string,
  },
  grandfatherName: data[5] as string,
  nationalId: {
    expiryDate: moment(data[1]).format("YYYY-MM-DD"),
    idNumber: data[0] as string,
  },
  maritalStatus: {
    id: parseInt(data[19]),
    name: data[18] as string,
  },
  nationalities: [{ country: { id: 1, name: "" }, countryId: 1 }],
  userId: 1,
};
