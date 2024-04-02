import { useEffect } from "react";

function useClickOutside(ref, setShowRules) {
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowRules(false);
      }
    }

    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, [ref, setShowRules]);
}

export default useClickOutside;
