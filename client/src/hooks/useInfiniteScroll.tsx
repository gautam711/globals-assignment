import { useRef, useEffect } from "react";

export default function useInfiniteScroll(cb: Function, deps: Array<any>) {
  const observerTarget = useRef<any>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          cb();
        }
      },
      { threshold: 1 }
    );

    const observerRef = observerTarget.current;
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
    return () => {
      if (observerRef) {
        observer.unobserve(observerRef);
      }
    };
  }, [observerTarget, ...deps]);
  return [observerTarget];
}
