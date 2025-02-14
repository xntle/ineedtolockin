"use client"
import { useState, useEffect } from "react";

const Pomodoro = () => {
  const [time, setTime] = useState<number>(() => {
    return Number(localStorage.getItem("timer")) || 25 * 60; // Load from storage or default 25 min
  });
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(() => {
    return localStorage.getItem("isBreak") === "true";
  });

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => {
          const newTime = prev - 1;
          localStorage.setItem("timer", newTime.toString()); // Save to localStorage
          return newTime;
        });
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false); // Stop when reaching 0
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  // Save time to localStorage when user updates it manually
  useEffect(() => {
    localStorage.setItem("timer", time.toString());
    localStorage.setItem("isBreak", isBreak.toString());
  }, [time, isBreak]);

  // Switch between study and break mode
  const toggleBreak = () => {
    if (isBreak) {
      setTime(25 * 60); // Switch to study mode (25 min)
      setIsBreak(false);
    } else {
      setTime(5 * 60); // Switch to break mode (5 min)
      setIsBreak(true);
    }
    setIsRunning(true); // Auto-start when switching
  };

  return (
    <div className="flex flex-col items-center text-center text-black space-y-2">
      {/* Timer Mode */}
      <h2 className="text-lg font-semibold">
        {isBreak ? "break time ☕" : "study time 🍅"}
      </h2>

      {/* Timer Controls */}
      <div className="flex items-center space-x-4 text-4xl font-bold">
        <button
          onClick={() => {
            const newTime = Math.max(time - 60, 60);
            setTime(newTime);
            localStorage.setItem("timer", newTime.toString());
          }}
          className="text-2xl"
        >
          -
        </button>
        <span>{formatTime(time)}</span>
        <button
          onClick={() => {
            const newTime = time + 60;
            setTime(newTime);
            localStorage.setItem("timer", newTime.toString());
          }}
          className="text-2xl"
        >
          +
        </button>
      </div>

      {/* Start/Pause & Break Buttons */}
      <div className="flex justify-between w-48 mt-2">
        <button onClick={() => setIsRunning((prev) => !prev)} className="text-lg font-semibold">
          {isRunning ? "pause" : "start"}
        </button>
        <button onClick={toggleBreak} className="text-lg font-semibold">
          {isBreak ? "study" : "break"}
        </button>
      </div>
    </div>
  );
};

export default Pomodoro;
