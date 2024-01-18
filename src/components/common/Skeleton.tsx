type SkeletonProps = {
  count?: number;
  size?: "sm" | "md" | "lg";
  height?: string;
  width?: string;
};
const Skeleton = ({ count = 1, size, height, width }: SkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} role="placeholder" className="max-w-sm animate-pulse">
          <div
            className={`bg-gray-200 dark:bg-gray-700 ${
              size
                ? `card-${size}`
                : `${
                    !height && !width
                      ? "card-sm md:card-md lg:card-lg"
                      : `${height} ${width}`
                  }`
            }`}
          ></div>
        </div>
      ))}
    </>
  );
};

export default Skeleton;
