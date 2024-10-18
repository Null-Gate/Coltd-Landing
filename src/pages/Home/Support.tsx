import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Define the props type for BlockInTextCard
interface BlockInTextCardProps {
  tag: string;
  text: React.ReactNode;
  examples: string[];
}

export const Support = () => {
  return (
    <div className="flex items-center justify-center bg-neutral-100 px-8 py-24 text-neutral-800">
      <BlockInTextCard
        tag="/ Support"
        text={
          <>
            <strong>Have questions?</strong> We'd love to help! Contact support
            for any issue you may face.
          </>
        }
        examples={[
          "How can `Kar Gate` benefit for me ?",
          "How is the pricing works ?",
          "How can it assure my safety ?",
          "Why should I purchase the premium features ?",
        ]}
      />
    </div>
  );
};

const BlockInTextCard: React.FC<BlockInTextCardProps> = ({
  tag,
  text,
  examples,
}) => {
  return (
    <div className="w-full max-w-xl space-y-6">
      <div>
        <p className="mb-1.5 text-sm font-light uppercase">{tag}</p>
        <hr className="border-neutral-700" />
      </div>
      <p className="max-w-lg text-xl leading-relaxed">{text}</p>
      <div>
        <Typewrite examples={examples} />
        <hr className="border-neutral-300" />
      </div>
      <button className="w-full rounded-full border border-primary py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-neutral-100">
        Contact Support
      </button>
    </div>
  );
};

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5500;

// Define the props type for Typewrite
interface TypewriteProps {
  examples: string[];
}

const Typewrite: React.FC<TypewriteProps> = ({ examples }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((pv) => (pv + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, [examples.length]);

  return (
    <p className="mb-2.5 text-sm font-light uppercase">
      <span className="inline-block size-2 bg-primary" />
      <span className="ml-3">
        EXAMPLE:{" "}
        {examples[exampleIndex].split("").map((l, i) => (
          <motion.span
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
            key={`${exampleIndex}-${i}`}
            className="relative"
          >
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: i * LETTER_DELAY,
                duration: 0,
              }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-primary"
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};
