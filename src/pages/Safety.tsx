import { FiEdit, FiChevronDown, FiPlusSquare } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState, FC } from "react";

interface OptionProps {
  text: string;
  Icon: FC;
  setOpen: (open: boolean) => void;
  isActive: boolean;
  onClick: () => void;
}

const Safety: FC = () => {
  const [open, setOpen] = useState(false);
  const [activeOption, setActiveOption] = useState("Privacy Policy");

  const handleOptionClick = (option: string) => {
    setActiveOption(option);
    setOpen(false);
  };

  return (
    <div className="lg:p-8 pb-56 flex flex-col items-center justify-center bg-white">
      <motion.div animate={open ? "open" : "closed"} className="relative mb-8 ">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-red-700 hover:bg-red-700 transition-colors"
        >
          <span className="font-medium text-sm">Read More..</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
        >
          <Option
            setOpen={setOpen}
            Icon={FiEdit}
            text="Privacy Policy"
            isActive={activeOption === "Privacy Policy"}
            onClick={() => handleOptionClick("Privacy Policy")}
          />
          <Option
            setOpen={setOpen}
            Icon={FiPlusSquare}
            text="Terms of Service (TOS)"
            isActive={activeOption === "Terms of Service (TOS)"}
            onClick={() => handleOptionClick("Terms of Service (TOS)")}
          />
        </motion.ul>
      </motion.div>

      <div className="w-full max-w-2xl bg-gray-50 p-6 rounded-lg shadow-md">
        {activeOption === "Privacy Policy" && (
          <div>
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
            <p className="mb-2 font-bold">d. OBD (On-Board Diagnostics) Data</p>
            <p className="mb-2">
              Real-time car diagnostics to assist in maintenance tracking.
            </p>
            {/* Add other sections of the Privacy Policy as needed */}
          </div>
        )}
        {activeOption === "Terms of Service (TOS)" && (
          <div>
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
                Provide accurate and up-to-date information during registration.
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
            {/* Add other sections of the Terms of Service as needed */}
          </div>
        )}
      </div>
    </div>
  );
};

const Option: FC<OptionProps> = ({
  text,
  Icon,
  setOpen,
  isActive,
  onClick,
}) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        onClick();
        setOpen(false);
      }}
      className={`flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md transition-colors cursor-pointer ${
        isActive
          ? "bg-indigo-100 text-indigo-500"
          : "hover:bg-indigo-100 text-slate-700 hover:text-indigo-500"
      }`}
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default Safety;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
