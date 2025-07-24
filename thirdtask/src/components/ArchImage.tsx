import { motion } from "framer-motion";
import Image from "next/image";

export const ArchImage = ({ src = "r1.png", type = "value" }) => {
  // Ensure src always has a leading forward slash but avoid double slashes
  const imageSrc = src.startsWith("/") ? src : `/${src}`;

  return (
    <motion.div
      className="flex-1 flex justify-center items-center"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div
        className={`overflow-hidden rounded-t-full rounded-b-[150px] border-8 { ${
          type !== "value" || !type ? "border-[#2d2b2b]" : "border-[#f9f9f9]"
        } w-[400px] h-[500px] relative shadow-lg`}
      >
        <Image src={imageSrc} alt="Our Value" fill className="object-cover" />
      </div>
    </motion.div>
  );
};
