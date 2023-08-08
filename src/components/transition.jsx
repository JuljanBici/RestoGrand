import { motion } from "framer-motion";

const transition = (OgComponent) => {
  const TransitionComponent = () => {
    return (
      <div>
        <OgComponent />
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 , transition: { duration: 0.5, ease: "circIn" , delay: 0.1 }}}
          exit={{ scaleY: 1, transition: { duration: 0.5, ease: "circOut" } }}
          className="fixed top-0 left-0 right-0 bottom-0 bg-[#151515] z-50 origin-bottom"
        />
      </div>
    );
  };

  return TransitionComponent;
};

export default transition;