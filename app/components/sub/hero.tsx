import { motion } from "framer-motion";

import {
    slideInFromLeft
} from "~/lib/motion";

export const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="px-20 mt-40 w-fit"
        >
            <motion.div
                variants={slideInFromLeft(0.5)}
                className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
            >
                <span>
                    Providing{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        the best
                    </span>{" "}
                    project experience.
                </span>
            </motion.div>

            <motion.p
                variants={slideInFromLeft(0.8)}
                className="text-lg text-gray-400 my-5 max-w-[600px]"
            >
                I&apos;m a Full Stack Software Engineer with experience in Website,
                Mobile, and Software development. Check out my projects and skills.
            </motion.p>
        </motion.div>
    );
};