const franchiseList1 = [
  "Franchise Agreement Term",
  "Five Years franchisee Right On Renewal Basis",
  "Lock – In Period",
  "24 months + 6 month (Notice): 30 Months",
  "Agreement Renewal",
  "On mutual consent for another 5 years term or as per the then new policy",
  "Store Size : Option1",
  "Express Format: Upto 1800 SFT (As per Town and space availability)",
  "Store Size : Option2",
  "Standard Format: Beyond 2000 Upto 3000 SFT (Applicable for State Capitals / Grade A Towns)",
];

const franchiseList2 = [
  "Trade Licenses,Shop Establishment, Fire License, Labor License , GST etc.",
  "To be arranged and borne by Franchisee only",
  "Bank Swipe Machine Charges, Shop & Stock Insurance",
  "To be arranged and borne by Franchisee only",
  "Store Rent & Maintenance , Electricity, Staff Salary, Incentives to staff",
  "To be arranged and borne by Franchisee only",
  "Inward Transport Charges",
  "To be borne by Franchisee",
  "Packing Material, Seasonal Gifts",
  "To Be Procured by Sreeleathers and Bill to Franchisee",
];

export default function Franchise() {
  return (
    <section className="my-[8vh] px-[15vw] flex justify-center h-fit min-h-svh w-svw">
      <div className="flex flex-col gap-6 py-10 px-4 sm:p-10 rounded-xl min-h-full h-fit w-full bg-div">
        <div className="flex flex-col items-center justify-center font-normal gap-4">
          <h3 className="text-3xl md:text-5xl">HOW TO GET OUR FRANCHISE</h3>
          <p className="text-sm xl:text-lg sans text-start">
            Sreeleathers is now inviting entrepreneurs in the form of Franchise
            partners (FOFO Model) to open stores in towns over 1 lakh population
            preferably district head quarter towns. The model ensures healthy
            margin and long term stable business with handsome ROI. The
            investment ranges tfrom 80 lakh to 1.25 Cr as per space and
            location.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-6 sans">
          <h3 className="font-bold text-xl sm:text-2xl md:text-4xl">
            Franchise Owned Franchisee Operated Model (FOFO)
          </h3>
          <SubFranchise
            title="Sreeleathers - Exclusive Store Franchise Policy"
            list={franchiseList1}
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-6 sans">
          <SubFranchise
            title="Compliances & Operational Expenses to be done by Franchise"
            list={franchiseList2}
          />
        </div>
      </div>
    </section>
  );
}

function SubFranchise({ title, list }: { title: string; list: string[] }) {
  return (
    <div className="w-full flex flex-col gap-4">
      <h3 className="font-bold text-sm sm:text-2xl w-full flex justify-center boxShadow bg-white py-2 px-6 items-center min-h-[66px] rounded-xl">
        {title}
      </h3>
      <div className="grid lg:grid-cols-2 w-full gap-2">
        {list.map((card, index) => {
          return <LayoutCard key={index} index={index + 1} para={card} />;
        })}
      </div>
    </div>
  );
}

function LayoutCard({ index, para }: { index: number; para: string }) {
  const isEven = index % 2 == 0 ? true : false;
  return (
    <div
      className={`"col-span-1 w-full min-h-16 h-full flex items-center justify-start py-2 px-4 rounded-2xl text-xs sm:text-[16px] boxShadow " ${
        isEven ? "bg-[#0A92C1] text-white" : "text-black bg-white"
      }`}
    >
      {para}
    </div>
  );
}
