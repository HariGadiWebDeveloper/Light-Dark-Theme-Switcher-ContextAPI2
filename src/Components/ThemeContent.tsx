import React from "react";
import { useTheme } from "../Context/ThemeContext";

const ThemeContent: React.FC = () => {
  const { isLight } = useTheme();
  console.log(isLight, "isLight");
  return (
    <div
      className={`${isLight ? "bg-white" : "bg-black"} shadow w-[500px] p-4`}
    >
      <h1 className={`${isLight ? "text-black" : "text-white"}`}>Hari Gadi</h1>
      <p className={`${isLight ? "text-black" : "text-white"}`}>
        I am a Front-End Developer with 2.3+ years of experience building fast,
        responsive, and scalable web applications. I specialize in React.js,
        Next.js, TypeScript, and Tailwind CSS, and I have worked extensively on
        real-world projects involving admin dashboards, authentication flows,
        infinite scrolling, WebSockets, and complex state management using Redux
        Toolkit and Context API.
      </p>
    </div>
  );
};

export default ThemeContent;
