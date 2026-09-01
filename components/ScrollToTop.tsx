"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Scroll to top instantly when component mounts
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, []);

  return null;
}