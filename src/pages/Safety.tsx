/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, AnimatePresence } from "framer-motion";
import { useState, FC } from "react";

const Safety: FC = () => {
  const [activeOption, setActiveOption] = useState("Privacy Policy");

  const contentVariants: any = {
    initial: {
      x: 100,
      opacity: 0,
      filter: "blur(8px)",
      position: "absolute",
    },
    animate: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      position: "relative",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      x: 100,
      opacity: 0,
      filter: "blur(8px)",
      position: "absolute",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="lg:p-8 pt-16 lg:pt-10 pb-56 flex flex-col overflow-hidden items-center justify-center bg-gradient-to-b from-white to-[#f6f7f8]">
      {/* SWITCH BUTTON */}
      <div className="relative flex bg-white border border-gray-300 rounded-full overflow-hidden mb-8 shadow-sm">
        {["Privacy Policy", "Terms of Service"].map((option) => (
          <button
            key={option}
            onClick={() => setActiveOption(option)}
            className={`relative z-10 px-5 py-2 text-sm font-medium transition-colors ${
              activeOption === option ? "text-white" : "text-gray-600"
            }`}
          >
            {option}
          </button>
        ))}

        {/* Animated sliding background */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 250, damping: 25 }}
          className={`absolute top-0 bottom-0 w-1/2 rounded-full bg-primary z-0 ${
            activeOption === "Privacy Policy" ? "left-0" : "left-1/2"
          }`}
        />
      </div>

      {/* PANEL CONTENT */}
      <div className="w-full max-w-2xl relative min-h-[500px]">
        <AnimatePresence mode="wait">
          {activeOption === "Privacy Policy" && (
            <motion.div
              key="privacy"
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white p-6 rounded-2xl shadow-lg border border-[#f1f1f1]"
            >
              <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
              <p className="mb-2">Effective Date: 10.12.2024 00:00</p>
              <p className="mb-2">Last Updated: 10.12.2024 00:00</p>
              <p className="mb-2">
                At Kargate, we prioritize your privacy and are committed to
                safeguarding your personal information. This Privacy Policy
                outlines how we collect, use, and protect your data when you use
                our platform.
              </p>
              <h3 className="font-bold mt-4 mb-2">1. Information We Collect</h3>
              <p className="mb-2">
                We collect the following types of information to provide and
                improve our services:
              </p>
              <p className="mb-2 font-bold">a. Personal Information</p>
              <ul className="list-disc list-inside mb-2">
                <li>Name, email address, phone number, and profile picture.</li>
                <li>
                  Payment details for processing subscriptions and transactions.
                </li>
              </ul>
              <p className="mb-2 font-bold">b. Device Information</p>
              <p className="mb-2">
                Information about your device, operating system, and app usage.
              </p>
              <p className="mb-2 font-bold">c. Location Data</p>
              <p className="mb-2">
                Precise or approximate location data with your consent for GPS
                tracking.
              </p>
              <p className="mb-2 font-bold">
                d. OBD (On-Board Diagnostics) Data
              </p>
              <p className="mb-2">
                Real-time car diagnostics to assist in maintenance tracking.
              </p>
            </motion.div>
          )}

          {activeOption === "Terms of Service" && (
            <motion.div
              key="tos"
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white p-6 rounded-2xl shadow-lg border border-[#f1f1f1]"
            >
              <h2 className="text-xl font-bold mb-4">Terms of Service (TOS)</h2>
              <p className="mb-2">Effective Date: 10.12.2024 00:00</p>
              <p className="mb-2">Last Updated: 10.12.2024 00:00</p>
              <p className="mb-2">
                Welcome to Kargate! By using our platform, you agree to the
                following terms. Please read them carefully.
              </p>
              <h3 className="font-bold mt-4 mb-2">1. User Responsibilities</h3>
              <p className="mb-2">By using Kargate, you agree to:</p>
              <ul className="list-disc list-inside mb-2">
                <li>
                  Provide accurate and up-to-date information during
                  registration.
                </li>
                <li>Use the platform for lawful purposes only.</li>
                <li>
                  Refrain from engaging in fraudulent or harmful activities,
                  including theft, harassment, or spam.
                </li>
              </ul>
              <h3 className="font-bold mt-4 mb-2">2. Prohibited Activities</h3>
              <p className="mb-2">
                The following are strictly prohibited on Kargate:
              </p>
              <ul className="list-disc list-inside mb-2">
                <li>Use of the platform for illegal activities.</li>
                <li>Misusing the system to harm others or damage property.</li>
                <li>Creating multiple accounts to bypass bans.</li>
              </ul>
              <h3 className="font-bold mt-4 mb-2">
                3. Consequences for Misconduct
              </h3>
              <p className="mb-2">
                We reserve the right to take action if you violate these terms,
                including but not limited to:
              </p>
              <ul className="list-disc list-inside mb-2">
                <li>
                  First Violation: Issuing a warning and lowering your platform
                  rating.
                </li>
                <li>
                  Repeated Violations: Permanent account suspension and blocking
                  associated ID cards, devices, and accounts.
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Safety;
