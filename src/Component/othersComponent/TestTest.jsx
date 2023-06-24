import React from "react";

export default function TestTest() {
  const text = "សួស្តីអូស្ត្រាលបាតទេ";
  const language = "kh"; // Language code (e.g., "en" for English, "kh" for Khmer)

  const fontClass = language === "en" ? "font-SecondaryFont" : "font-KhmerFont";

  return (
    <div className={`text-base ${fontClass}`}>
      <p>{text}</p>
    </div>
  );
}