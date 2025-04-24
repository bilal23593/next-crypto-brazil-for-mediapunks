"use client";
import { useEffect, useState } from "react";

export default function ConsentPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem("cookie_consent");
      if (!consent) {
        setShowPopup(true);
      }
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  const handleConsent = (choice) => {
    localStorage.setItem("cookie_consent", choice);
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-start pt-[50px] pb-[50px] z-[9999] overflow-y-auto"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div
        className="bg-white p-8 rounded-2xl max-w-md w-[90%] text-center shadow-4xl animate-pulse"
        style={{ border: "4px solid #ffcc00" }}
      >
        <h2
          className="text-2xl font-bold text-green-700 mb-4"
          style={{ marginTop: "25px" }}
        >
          🍪 We Value Your Privacy
        </h2>
        <p className="text-gray-700 text-sm mb-6">
          We use cookies to improve your experience. You can accept or reject
          our cookie policy. See our{" "}
          <a
            href="/privacypolicy"
            className="text-yellow-600 font-semibold underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          .
        </p>
        <div
          className="flex justify-center gap-4"
          style={{ marginBottom: "25px" }}
        >
          <button
            onClick={() => handleConsent("accepted")}
            className="btn btn-warning fw-bold px-4 py-1 me-2"
          >
            Accept
          </button>

          <button
            onClick={() => handleConsent("rejected")}
            className="btn btn-secondary fw-bold px-4 py-1"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
