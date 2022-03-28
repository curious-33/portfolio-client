import { useEffect, useRef, useState } from "react";

export const useOutsideClick = (initialValue) => {
  const [visible, setVisible] = useState(initialValue);
  let ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return [ref, visible, setVisible];
};
