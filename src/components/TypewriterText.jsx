import { useEffect, useState } from "react";

export default function TypewriterText() {
  const text = `Happy Birthday My Love ❤️🎂

Today isn’t just about celebrating your age… it’s about celebrating you.
You’ve brought me happiness I didn’t even know I needed, and I’m so grateful for you.

I love you endlessly Iyawo mi❤️
I'm so lucky to have you🥺❤️`;

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 100); // speed (lower = faster)

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <p className="whitespace-pre-line text-lg md:text-xl leading-relaxed text-center">
      {displayedText}
      <span className="animate-pulse">|</span>
    </p>
  );
}
