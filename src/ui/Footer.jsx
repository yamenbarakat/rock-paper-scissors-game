import { useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

function Footer() {
  const [showRules, setShowRules] = useState(false);
  const ref = useRef();
  useClickOutside(ref, setShowRules);

  return (
    <footer className={showRules ? "open" : ""}>
      <div className="rules-btn-container">
        <button className="rules-btn" onClick={() => setShowRules(true)}>
          Rules
        </button>
      </div>

      {showRules && (
        <div className="rules-info" ref={ref}>
          <h2>Rules</h2>
          <img src="image-rules.svg" alt="game rules" />
          <button className="close-icon" onClick={() => setShowRules(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </footer>
  );
}

export default Footer;
