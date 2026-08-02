import { motion } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PageTransition = ({ children }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}   // start (invisible + down)
      animate={{ opacity: 1, y: 0 }}    // enter (visible + normal)
      exit={{ opacity: 0, y: -40 }}     // exit (fade + move up)
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;