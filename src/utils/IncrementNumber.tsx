"use client";

import { useEffect, useRef } from "react";

interface CounterProps {
  value: number;
}

export const Counter: React.FC<CounterProps> = ({ value }) => {
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const updateCount = () => {
      const increment = Math.ceil(value / 100);
      let initialValue = 0;
      const increaseCount = setInterval(() => {
        initialValue += increment;
        if (initialValue > value) {
          if (elRef.current) {
            elRef.current.textContent = `${value}`;
          }
          clearInterval(increaseCount);
          return;
        }
        if (elRef.current) {
          elRef.current.textContent = `${initialValue}`;
        }
      }, 20);
    };

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateCount();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    const currentElement = elRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [value]);

  return <span ref={elRef}>{value}</span>;
};

export default Counter;
