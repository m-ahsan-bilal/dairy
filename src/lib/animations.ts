export const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const }
    }
};

export const scaleOnHover = {
    hover: {
        scale: 1.05,
        transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
};

export const smoothSlide = {
    hidden: { x: -20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

export const gentlePulse = {
    pulse: {
        scale: [1, 1.02, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    }
};

export const progressiveLoad = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: {
        filter: "blur(0px)",
        opacity: 1,
        transition: { duration: 0.8 }
    }
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};
