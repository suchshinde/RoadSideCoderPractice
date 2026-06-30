/* eslint-disable react-hooks/refs */
import { useRef } from "react";

function useCusotmEffect(callBack, dependancy) {
  const isFirstRendred = useRef(true);
  const prevDep = useRef([]);

  // Call callback on onload

  if (isFirstRendred.current) {
    isFirstRendred.current = false;
    const cleanup = callBack();
    if (cleanup && typeof cleanup === "function") {
      cleanup();
    }
    return;
  }

  // Call callback On Dependacy Change

  const dependancyChanged = dependancy
    ? JSON.stringify(dependancy) !== JSON.stringify(prevDep.current)
    : true;

  if (dependancyChanged) {
    const cleanup = callBack();
    if (dependancy && cleanup && typeof cleanup === "function") {
      cleanup();
    }
  }
  prevDep.current = dependancy || [];
}

export default useCusotmEffect;
