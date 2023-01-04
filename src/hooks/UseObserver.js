import { useEffect, useRef, useState } from "react";

const useObserver = () => {
  const refC = useRef(null);
  const [isVisible, setIsVivible] = useState(false);

  const callBack = (entries) => {
    const [entry] = entries;
    setIsVivible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callBack);
    if (refC.current) observer.observe(refC.current);

    return () => {
      if (refC.current) observer.disconnect(refC.current);
    };
  }, [refC]);

  return [refC, isVisible];
};

export default useObserver;