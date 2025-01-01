type LocalizedName = {
  fatherName: string;
  firstName: string;
  familyName: string;
  grandfatherName: string;
};

type NationalId = {
  expiryDate: string;
  idNumber: string;
};

type MaritalStatus = {
  id: number;
  name: string;
};

type Nationality = {
  country: { id: number; name: string };
  countryId: number;
};

export type FormValues = {
  dependants: string | number;
  familyName: string;
  fatherName: string;
  firstName: string;
  localizedName: LocalizedName | string;
  grandfatherName: string;
  nationalId: NationalId | string;
  maritalStatus: MaritalStatus | string;
  nationalities: Nationality[] | string;
  userId: string | number;
};
