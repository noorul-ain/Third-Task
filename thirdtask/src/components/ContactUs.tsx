"use client";
import React from "react";
import { ArchImage } from "./ArchImage";
import { motion } from "framer-motion";

// Contact Card Component
const ContactCard = ({
  title,
  number,
  actionText,
  icon,
  delay,
  isBlueButton = false,
}: {
  title: string;
  number: string;
  actionText: string;
  icon: React.ReactNode;
  delay: number;
  isBlueButton?: boolean;
}) => {
  return (
    <motion.div
      className="bg-white rounded-md shadow-md p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center gap-4 mb-2">
        <div className="bg-[#eeeeff] p-2 rounded-md">{icon}</div>
        <div>
          <div className="font-bold text-[#1f3e72]">{title}</div>
          <div className="text-gray-500 text-sm">{number}</div>
        </div>
      </div>
      <button
        className={`w-full mt-4 ${
          isBlueButton
            ? "bg-[#eeeeff] hover:bg-blue-600 hover:text-white text-blue-600"
            : "bg-[#eeeeff] hover:bg-blue-100 text-blue-600"
        } transition-colors py-2 rounded-md font-medium text-sm`}
      >
        {actionText}
      </button>
    </motion.div>
  );
};

// Content Section Component
const ContactContent = () => {
  // Phone icon
  const phoneIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-blue-600"
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      />
    </svg>
  );

  // Chat icon
  const chatIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-blue-600"
    >
      <path
        fillRule="evenodd"
        d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z"
        clipRule="evenodd"
      />
    </svg>
  );

  // Video call icon
  const videoIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-blue-600"
    >
      <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
    </svg>
  );

  // Message icon
  const messageIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-blue-600"
    >
      <path
        fillRule="evenodd"
        d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <motion.div
      className="flex-1 max-w-xl"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <span className="text-lg font-semibold text-orange-400">
        Our Contact Us
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-[#1f3e72] mt-2 mb-4">
        Easy to contact us
      </h2>
      <p className="text-gray-500 mb-8">
        We always ready to help by providing the best services for you. We
        beleive a good place to live can make your life better
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Call */}
        <ContactCard
          title="Call"
          number="021 123 145 14"
          actionText="Call now"
          icon={phoneIcon}
          delay={0.1}
          isBlueButton={true}
        />

        {/* Chat */}
        <ContactCard
          title="Chat"
          number="021 123 145 14"
          actionText="Chat now"
          icon={chatIcon}
          delay={0.2}
          isBlueButton={true}
        />

        {/* Video Call */}
        <ContactCard
          title="Video Call"
          number="021 123 145 14"
          actionText="Video Call now"
          icon={videoIcon}
          delay={0.3}
          isBlueButton={true}
        />

        {/* Message */}
        <ContactCard
          title="Message"
          number="021 123 145 14"
          actionText="Message now"
          icon={messageIcon}
          delay={0.4}
          isBlueButton={true}
        />
      </div>
    </motion.div>
  );
};

// Main Component
const ContactUs = () => {
  return (
    <section id="contactus" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Content */}
        <ContactContent />

        {/* Right: Arch Image */}
        <ArchImage src="/r2.png" />
      </div>
    </section>
  );
};

export default ContactUs;
