"use client";

import { useState, useEffect } from "react";

export function Typewriter({ 
  phrases = [], 
  text = "", 
  typingSpeed = 80, 
  deletingSpeed = 40, 
  pauseTime = 2000, 
  cursor = true 
}) {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  // Fallback to text if phrases is empty
  const items = phrases.length > 0 ? phrases : [text];

  useEffect(() => {
    if (!items || items.length === 0 || !items[0]) return;

    const i = loopNum % items.length;
    const fullText = items[i];

    const timeout = setTimeout(() => {
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      // If finished typing the word
      if (!isDeleting && currentText === fullText) {
        // If there is only one static item, do not delete/loop, just stop
        if (items.length === 1) return;
        
        // Otherwise, wait then start deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } 
      // If finished deleting the word
      else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, loopNum, items, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-flex items-center">
      <span>{currentText}</span>
      {cursor && (
        <span className="inline-block w-[3px] sm:w-[4px] h-[0.9em] bg-current ml-1.5 -mb-[0.05em] animate-[pulse_1s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
      )}
    </span>
  );
}
