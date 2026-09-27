"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "AI Full Stack Developer",
  "Senior Software Engineer",
  "Creating AI-Powered Solutions",
  "Cloud-Native Applications",
] as const;

export default function TypingEffect() {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentFullPhrase = PHRASES[phraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentPhrase.length < currentFullPhrase.length) {
          setCurrentPhrase(
            currentFullPhrase.substring(0, currentPhrase.length + 1),
          );
          setTypingSpeed(150);
        } else {
          setIsDeleting(true);
          setTypingSpeed(2000);
        }
      } else if (currentPhrase.length > 0) {
        setCurrentPhrase(
          currentPhrase.substring(0, currentPhrase.length - 1),
        );
        setTypingSpeed(75);
      } else {
        setIsDeleting(false);
        setPhraseIndex((index) => (index + 1) % PHRASES.length);
        setTypingSpeed(500);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentPhrase, isDeleting, phraseIndex, typingSpeed]);

  return (
    <h1 className="mt-1 h-[100px] text-[48px] font-bold leading-[1.05] tracking-tight text-white md:h-[120px] md:text-[65px]">
      {currentPhrase}
    </h1>
  );
}
