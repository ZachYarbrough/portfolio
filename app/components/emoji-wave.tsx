
"use client"
import React, { useState } from "react";

function EmojiWave({ emoji = "👋" }) {
  const [isWaving, setIsWaving] = useState(false);

  const handleMouseEnter = () => {
    setIsWaving(true);
  };

  const handleAnimationEnd = () => {
    setIsWaving(false);
  };

  return (
    <span
      className={`wave ${isWaving ? "wave-active" : ""}`}
      onMouseEnter={handleMouseEnter}
      onAnimationEnd={handleAnimationEnd}
      role="img"
      aria-label="waving hand"
    >
      {emoji}
    </span>
  );
}

export default EmojiWave
