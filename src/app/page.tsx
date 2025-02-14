"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-[#fdfdfd] h-screen items-center justify-center mt-[-30px]">
      <div className="text-center">
        <h1 className="text-2xl font-bold">ineedtolockin.com</h1>
        <p className="text-gray-500">a simple space for locking in</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className=" shadow-md bg-[#fdfdfd] rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
          >
            <h1 className="text-lg font-semibold">{feature.title}</h1>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Start Button */}
      <button
        onClick={() => router.push("/timer")}
        className="mt-8 px-4 py-1 shadow-md text-black rounded-2xl font-semibold hover:shadow-lg transition-all"
      >
        start
      </button>
    </div>
  );
}

// Feature Data
const features = [
  {
    title: "pomodoro focus timer",
    description: "boost productivity with timed focus sessions.",
  },
  {
    title: "streak",
    description: "track your daily progress.",
  },
  {
    title: "sticky notes",
    description: "jot down quick thoughts and reminders.",
  },
];
