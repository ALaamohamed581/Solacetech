import PersonalCard from "../componeents/PersonalCard";
import DetailsCard from "../componeents/DeatilsCard";

const Profile = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col gap-10 mt-16">
        <div className="m-auto md:m-0">
          <PersonalCard />
        </div>
        <div>
          <DetailsCard title="Basic Information">
            <DetailsCard.Row
              properties={[
                { name: "National ID Number", value: "29702031400693" },
                { name: "National ID Expiring Date", value: "01 / 04 / 2025" },
                { name: "Title", value: "Mr." },
              ]}
            />
            <DetailsCard.Row
              properties={[
                { name: "First Name", value: "John" },
                { name: "Father Name", value: "John" },
                { name: "Grand Father Name", value: "John" },
                { name: "Family Name", value: "Smith" },
              ]}
            />
            <DetailsCard.Row
              properties={[
                { name: "الأسم الأول", value: "جون" },
                { name: "اسم الأب", value: "جون" },
                { name: "اسم الجد", value: "جون" },
                { name: "اللقب / اسم العائلة", value: "سميث" },
              ]}
            />
            <DetailsCard.Row
              properties={[
                { name: "Date of Birth", value: "01 / 04 / 1980" },
                { name: "Gender", value: "Male" },
                { name: "Nationality", value: "Egyptian" },
                { name: "Additional Nationality", value: "-" },
              ]}
            />
            <DetailsCard.Row
              properties={[
                { name: "Passport No.", value: "A135464" },
                { name: "Passport Issue Date", value: "01 / 04 / 1980" },
                { name: "Passport Expiry Date", value: "01 / 04 / 1980" },
              ]}
            />
            <DetailsCard.Row
              properties={[
                { name: "Marital Status", value: "Single" },
                { name: "Dependencies", value: "0" },
              ]}
            />

            <DetailsCard.Row
              properties={[{ name: "Status", value: "Active" }]}
            />
          </DetailsCard>
          <DetailsCard title="Contact Information">
            <DetailsCard.Row
              properties={[
                { name: "Personal Email", value: "John.smith@gmail.com " },
                { name: "Mobile", value: "011223344556" },
              ]}
            />
          </DetailsCard>
          <DetailsCard title="Emergency Contacts">
            <DetailsCard.Row
              properties={[
                {
                  name: "Emergency Contact Person Name",
                  value: "John John",
                },
                { name: "Emergency Relation", value: "Father" },
                { name: "Emergency Phone", value: "011224477885" },
              ]}
            />
          </DetailsCard>
          <DetailsCard title="Address Details">
            <DetailsCard.Row
              properties={[
                {
                  name: "Country",
                  value: "Egypt",
                },
                { name: "City", value: "Cairo" },
                { name: "Postal Code", value: "11728" },
              ]}
            />
            <DetailsCard.Row
              properties={[
                {
                  name: "Building",
                  value: "7",
                },
                { name: "Street", value: "7" },
                { name: "Floor No.", value: "72" },
                { name: "Apartment", value: "7" },
              ]}
            />
          </DetailsCard>
          <DetailsCard title="Address Details">
            <DetailsCard.Row
              properties={[
                {
                  name: "Country",
                  value: "Egypt",
                },
                { name: "City", value: "Cairo" },
                { name: "Postal Code", value: "11728" },
              ]}
            />
            <DetailsCard.Row
              properties={[
                {
                  name: "Building",
                  value: "7",
                },
                { name: "Street", value: "7" },
                { name: "Floor No.", value: "72" },
                { name: "Apartment", value: "7" },
              ]}
            />
          </DetailsCard>
        </div>{" "}
      </div>
    </>
  );
};

export default Profile;
