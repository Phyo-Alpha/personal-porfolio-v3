import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type SkillIconProps = {
    src: string;
    name: string;
    width: number;
    height: number;
    index: number;
};

const SkillIcon = ({
    src,
    name,
    width,
    height,
    index,
}: SkillIconProps) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const animationDelay = 0.1;

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}
        >
            <img src={`/skills/${src}`} width={width} height={height} alt={name} />
        </motion.div>
    );
};

export default SkillIcon;