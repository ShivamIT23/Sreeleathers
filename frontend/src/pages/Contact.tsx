import { motion } from "framer-motion";
import FormField from "../components/Sub/FormField";
import FormTextAreaField from "../components/Sub/FormTextArea";
import { useState } from "react";

const slideVariants = {
  initial: { x: "100%", opacity: 0 }, // Start offscreen right
  animate: { x: 0, opacity: 1 }, // Slide into center
  exit: {},
};

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        type: "spring",
        mass: 1,
        stiffness: 100,
        damping: 15,
      }}
      className=" h-fit w-full"
    >
      <div className="min-h-svh mt-10 h-fit flex flex-col items-center justify-center">
        <h3 className="min-h-[70px] h-fit w-full flex justify-center items-center font-bold text-3xl md:text-5xl mb-7">CONTACT US</h3>
        <div className="w-[450px] md:min-w-[477px] max-w-[84vw] min-h-[560px] h-fit md:w-fit flex flex-col gap-6 rounded-3xl p-5 md:p-10 bg-div">
          <FormField
            label="Name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Eg. khusboo Chainani"
          />
          <FormField
            label="Phone Number"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Eg. 983662391"
          />
          <FormField
            label="Email Address"
            id="emailAddress"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            placeholder="khushboo@gmail.com"
          />
          <div>
            
          </div>
          <FormTextAreaField
            label="Message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter Address"
          />
        </div>
      </div>
    </motion.div>
  );
}
