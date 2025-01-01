import { FormValues } from "../types/forminputs";

const URL = import.meta.env.VITE_BASE_URL as string;

export const getUser = async () => {
  const res = await fetch(`${URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query user($_id: String!) { 
          user(_id: $_id) { 
          firstName
    fatherName
    grandfatherName
    familyName
    localizedName {
      firstName
      fatherName
      grandfatherName
      familyName
    }
    nationalId {
      idNumber
      expiryDate
    }
    nationalities {
      country {
        id
        name
      }
      countryId
    }
    maritalStatus {
      id
      name
    }
    dependants
  }
          } 
        
      `,
      variables: {
        _id: "6773226485455eaba2f302f8",
      },
    }),
  });
  if (!res.ok) {
    throw new Error("interneal server error");
  }

  return await res.json();
};
export const updateUser = async (
  _id: string,
  updatedData: Record<string, FormValues>
) => {
  try {
    const res = await fetch(`${URL}`, {
      method: "POST", // أو PUT / PATCH إذا كان التحديث
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          mutation updateUser($_id: String!, $updatedData: UserInput!) { 
            updateUser(_id: $_id, updatedData: $updatedData) { 
              firstName
              fatherName
              grandfatherName
              familyName
              localizedName {
                firstName
                fatherName
                grandfatherName
                familyName
              }
              nationalId {
                idNumber
                expiryDate
              }
              nationalities {
                country {
                  id
                  name
                }
                countryId
              }
              maritalStatus {
                id
                name
              }
              dependants
            }
          }
        `,
        variables: {
          _id,
          updatedData,
        },
      }),
    });

    if (!res.ok) {
      throw new Error("Internal server error");
    }

    const data = await res.json();
    return data.data.updateUser;
  } catch (error) {
    console.error("Error updating user data:", error);
    throw error;
  }
};
