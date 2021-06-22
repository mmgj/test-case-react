export const pageTransition = {
  initial: {
    y: 50,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.2,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.2,
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      ease: 'easeIn',
      duration: 0.2,
    },
  },
  transition: {
    duration: 0.2,
  },
};
