"use client";

import { useEffect, useRef } from "react";

const TRAIL_LIMIT = 12;

export default function CustomCursor() {
  const cursorRef = useRef<HTMLSpanElement>(null);
  const trailRef = useRef<HTMLSpanElement[]>([]);
  const pointRef = useRef({ x: -100, y: -100 });
  const previousPointRef = useRef({ x: -100, y: -100 });
  const speedRef = useRef(0);
  const pressedRef = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const setInteractiveState = (event: PointerEvent) => {
      const target = event.target;
      const isInteractive =
        target instanceof Element &&
        Boolean(target.closest("a, button, [role='button'], input, textarea, select"));
      cursor.classList.toggle("is-interactive", isInteractive);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const point = { x: event.clientX, y: event.clientY };
      const previousPoint = previousPointRef.current;
      const velocityX = point.x - previousPoint.x;
      const velocityY = point.y - previousPoint.y;
      const speed = Math.min(35, Math.hypot(velocityX, velocityY));
      const angle = Math.atan2(velocityY, velocityX) * (180 / Math.PI);

      pointRef.current = point;
      previousPointRef.current = point;
      speedRef.current = speed;

      cursor.style.left = `${point.x}px`;
      cursor.style.top = `${point.y}px`;
      cursor.style.setProperty("--cursor-angle", `${angle * 0.12}deg`);
      cursor.style.setProperty("--cursor-scale", `${1 + speed * 0.012}`);
      cursor.classList.toggle("is-moving", speed > 2);

      if (speed > 4 && Math.random() < Math.min(0.55, speed / 35)) {
        const trail = document.createElement("span");
        trail.className = "quantum-trail";
        trail.style.left = `${point.x}px`;
        trail.style.top = `${point.y}px`;
        trail.style.setProperty("--trail-scale", `${0.65 + speed / 45}`);
        document.body.appendChild(trail);
        trailRef.current.push(trail);

        window.requestAnimationFrame(() => trail.classList.add("is-fading"));

        if (trailRef.current.length > TRAIL_LIMIT) {
          trailRef.current.shift()?.remove();
        }
        window.setTimeout(() => trail.remove(), 420);
      }
    };

    const createShockwave = () => {
      const { x, y } = pointRef.current;
      const count = speedRef.current > 10 ? 14 : 10;

      for (let index = 0; index < count; index += 1) {
        const angle = (Math.PI * 2 * index) / count + Math.random() * 0.35;
        const distance = 32 + Math.random() * 58;
        const particle = document.createElement("span");
        particle.className = index % 3 === 0 ? "quantum-spark" : "quantum-particle";
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.setProperty("--particle-x", `${Math.cos(angle) * distance}px`);
        particle.style.setProperty("--particle-y", `${Math.sin(angle) * distance}px`);
        document.body.appendChild(particle);
        window.setTimeout(() => particle.remove(), 720);
      }

      const ring = document.createElement("span");
      ring.className = "quantum-ring-burst";
      ring.style.left = `${x}px`;
      ring.style.top = `${y}px`;
      document.body.appendChild(ring);
      window.setTimeout(() => ring.remove(), 620);
    };

    const handlePointerDown = () => {
      pressedRef.current = true;
      cursor.classList.add("is-pressed");
      createShockwave();
    };

    const handlePointerUp = () => {
      pressedRef.current = false;
      cursor.classList.remove("is-pressed");
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerover", setInteractiveState);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    const activeTrails = trailRef.current;

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", setInteractiveState);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      activeTrails.forEach((trail) => trail.remove());
    };
  }, []);

  return (
    <span ref={cursorRef} className="quantum-cursor" aria-hidden="true">
      <span className="quantum-cursor-core" />
    </span>
  );
}
