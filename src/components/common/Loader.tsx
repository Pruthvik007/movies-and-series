const Loader = ({ size = "lg" }: { size?: "sm" | "md" | "lg" }) => {
  return <span className={`loading loading-spinner loading-${size}`}></span>;
};

export default Loader;
