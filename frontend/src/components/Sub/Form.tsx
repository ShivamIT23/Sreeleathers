import { useState } from "react";

export default function Form() {
  const [entityName, setEntityName] = useState("");
  const [entityType, setEntityType] = useState("");
  const [contactPersonName, setContactPersonName] = useState("");
  const [SPOCContactNumber, setSPOCContactNumber] = useState("");
  const [otherContactNumber, setOtherContactNumber] = useState("");
  const [emailID, setEmailID] = useState("");
  const [tradeLicenseAvailable, setTradeLicenseAvailable] = useState("");
  const [GSTDetails, setGSTDetails] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [natureOfProperty, setNatureOfProperty] = useState("");
  const [googleLocationOftheProperty, setGoogleLocationOftheProperty] =
    useState("");
  const [propertyImageVideo, setPropertyImageVideo] = useState<File | null>();
  const [last3YearTurnover, setLast3YearTurnover] = useState("");
  const [leasePeriod, setLeasePeriod] = useState("");
  const [referredBy, setReferredBy] = useState("");
  const [balanceSheet, setBalanceSheet] = useState("");
  const [specialRemarks, setSpecialRemarks] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!propertyImageVideo) return;

    const isImage = propertyImageVideo.type.startsWith("image/");
    const isVideo = propertyImageVideo.type.startsWith("video/");

    if (isImage) {
      console.log("Selected image:", propertyImageVideo.name);
      // handle image preview or upload
    } else if (isVideo) {
      console.log("Selected video:", propertyImageVideo.name);
      // handle video preview or upload
    } else {
      console.log("Unsupported file type.");
    }
  }
  return (
    <section className="mb-[8vh] px-[10vw] flex justify-center h-fit min-h-svh w-svw">
      <div className="flex flex-col items-center justify-center font-normal gap-8 py-10 px-4 sm:p-10 rounded-xl min-h-full h-fit w-full bg-div">
        <h3 className="text-3xl md:text-4xl lg:text-5xl">
          PROSPECT FRANCHISEE KYC & BUSINESS DETAILS
        </h3>
        <form
          onSubmit={(e) => handleSubmit(e)}
          action="post"
          className="min-h-svh h-fit max-w-full grid md:grid-cols-2 gap-x-6 gap-y-10"
        >
          <FormField
            label="Entity Name"
            id="entityName"
            value={entityName}
            onChange={(e) => setEntityName(e.target.value)}
            placeholder="Name of the entity"
          />
          <FormField
            label="Entity Type"
            id="entityType"
            value={entityType}
            onChange={(e) => setEntityType(e.target.value)}
            placeholder="type of the entity"
          />
          <FormField
            label="Contact Person Name"
            id="contactPersonName"
            value={contactPersonName}
            onChange={(e) => setContactPersonName(e.target.value)}
            placeholder="Name of the Contact person"
          />
          <FormField
            label="SPOC Contact Number"
            id="spocContactNumber"
            value={SPOCContactNumber}
            onChange={(e) => setSPOCContactNumber(e.target.value)}
            placeholder="SPOC contact number"
          />
          <FormField
            label="Other Contact Number"
            id="otherContactNumber"
            value={otherContactNumber}
            onChange={(e) => setOtherContactNumber(e.target.value)}
            placeholder="Other Contact Number"
          />
          <FormField
            label="Email ID"
            id="emailID"
            value={emailID}
            onChange={(e) => setEmailID(e.target.value)}
            placeholder="Email address"
          />
          <FormField
            label="Trade License Available(Y/N):"
            id="entityName"
            value={tradeLicenseAvailable}
            onChange={(e) => setTradeLicenseAvailable(e.target.value)}
            placeholder="Trade License"
          />
          <FormField
            label="GST Details"
            id="GSTDetails"
            value={GSTDetails}
            onChange={(e) => setGSTDetails(e.target.value)}
            placeholder="GST Details"
          />
          <FormTextAreaField
            label="Property Address"
            id="propertyAddress"
            value={propertyAddress}
            onChange={(e) => setPropertyAddress(e.target.value)}
            placeholder="Enter Address"
          />
          <div className="flex flex-col gap-10 sans h-fit">
            <FormField
              label="Nature of the Property (Owned/ Rented)"
              id="natureOfTheProperty"
              value={natureOfProperty}
              onChange={(e) => setNatureOfProperty(e.target.value)}
              placeholder="Property nature"
            />
            <FormField
              type="url"
              label="Google Location of the Property"
              id="googleLocationOftheProperty"
              value={googleLocationOftheProperty}
              onChange={(e) => setGoogleLocationOftheProperty(e.target.value)}
              placeholder="Paste Link"
            />
          </div>
          <div className="flex flex-col gap-2 sans min-h-[176px]">
            <label htmlFor="propertyImageVideo" className="text-2xl font-bold">
              Property Images & Videos
            </label>
            <div className="h-full relative w-[70%] rounded-xl md:w-[30%] bg-white">
              <input
                type="file"
                accept="image/*,video/*"
                id="propertyImageVideo"
                onChange={(e) => {
                  if (!e.target.files) return;
                  setPropertyImageVideo(e.target.files[0]);
                }}
                className="hidden"
              />
              <label
                htmlFor="propertyImageVideo"
                className="cursor-pointer w-full h-full flex items-center justify-center border-2 border-[#979797] max-w-[70vw] sans text-[#575757] font-normal md:text-[128px] boxShadow rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-5xl"
              >
                +
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-10 sans h-fit">
            <FormField
              label="Last 3 Year Business Turnover"
              id="last3YearBusinessTurnover"
              value={last3YearTurnover}
              onChange={(e) => setLast3YearTurnover(e.target.value)}
              placeholder="Turnover"
            />
            <FormField
              label="Referred By"
              id="referredBy"
              value={referredBy}
              onChange={(e) => setReferredBy(e.target.value)}
              placeholder="Reference"
            />
          </div>
          <div className="flex flex-col gap-10 sans h-fit">
            <FormField
              label="Property Agreement Lease Period"
              id="propertyAgreementLeasePeriod"
              value={leasePeriod}
              onChange={(e) => setLeasePeriod(e.target.value)}
              placeholder="Lease Period"
            />
            <FormField
              label="Audited Balance Sheet"
              id="auditedBalanceSheet"
              value={balanceSheet}
              onChange={(e) => setBalanceSheet(e.target.value)}
              placeholder="Balance Sheet"
            />
          </div>
          <FormTextAreaField
            label="Special Remarks"
            id="specialRemarks"
            value={specialRemarks}
            onChange={(e) => setSpecialRemarks(e.target.value)}
            placeholder="Remarks"
          />
          <div className="min-h-[162px] max-w-[70vw] flex flex-col w-full gap-2 px-[3vw] col-span-full text-[16px]">
            <h3 className="inter font-bold w-full flex justify-center">Note</h3>
            <ul className="list-disc iter font-normal pl-6 flex flex-col gap-6">
              <li>
                The above information and attached documents are provided to M/S
                Sreeleathers - Sakchi (Jamshedpur) for business use only.
              </li>
              <li>
                This is not a final confirmation for Franchisee or Trade partner
                association and only information for review of prospect, upon
                verification and review of the shared information
              </li>
              <li>
                Eligible prospects shall be contacted from HO for the further
                proc
              </li>
            </ul>
          </div>
          <div className="w-full max-w-[70vw] col-span-full flex justify-center">
            <div className="rounded-[100px] w-fit min-w-20 bg-[linear-gradient(to_bottom,_#03A3D3,_#0A92C1)] py-3 px-5 gap-2 flex md:whitespace-nowrap shadow transition">
              <button
                type="submit"
                className="bg-inherit text-white w-fit h-fit roboto font-medium md:text-[16px]"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

const FormField = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) => {
  return (
    <div
      id="contact"
      className="flex flex-col gap-2 sans max-w-full min-h-[88px]"
    >
      <label htmlFor={id} className="sm:text-2xl font-bold">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border-2 border-[#979797] max-w-[70vw] text-[#444444] font-normal text-[8px] sm:text-sm md:text-[16px] boxShadow rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

const FormTextAreaField = ({
  label,
  id,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}) => {
  return (
    <div className="flex flex-col gap-2 sans min-h-[176px]">
      <label htmlFor={id} className="text-2xl font-bold">
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border-2 border-[#979797] max-w-[70vw] h-full mb-2 text-[#444444] font-normal text-sm md:text-[16px] boxShadow rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
