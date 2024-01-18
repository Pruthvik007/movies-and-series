import { useEffect } from "react";

const useInfiniteScroll = (callback: () => void) => {
  function handleScroll() {
    const { scrollY, innerHeight } = window;
    const isNearHalfway =
      innerHeight + scrollY >= document.body.offsetHeight * (5 / 6);
    if (isNearHalfway) {
      callback();
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
};
export default useInfiniteScroll;
