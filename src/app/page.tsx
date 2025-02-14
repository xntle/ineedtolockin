import Image from "next/image";

export default function Home() {
  return (
        <>
          <div className="text-center">
            <h1 className="text-2xl font-bold">ineedtolockin.com</h1>
            <p className="text-gray-500">a simple space for locking in</p>
          </div>
    
          <div className="flex flex-row justify-around mt-6">
            <div className="text-center">
              <h1 className="text-lg font-semibold">Pomodoro Focus Timer</h1>
            </div>
            <div className="text-center">
              <h1 className="text-lg font-semibold">Streak</h1>
            </div>
            <div className="text-center">
              <h1 className="text-lg font-semibold">Sticky Notes</h1>
            </div>
          </div>
        </>
      );
        
}
