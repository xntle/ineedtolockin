"use client"

import { useState } from "react";
import Sticky from "../components/sticky";
import Pomodoro from "../components/pomodoro";

export default function TimerPage() {
  const [notes, setNotes] = useState([{ id: Date.now() }]);

  // Add a new note
  const addNote = () => {
    setNotes([...notes, { id: Date.now() }]);
  };

  // Remove a note
  const removeNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <>
    <div className="flex justify-center flex-col items-center mt-[-50px] h-screen">
      {notes.map((note) => (
        <Sticky key={note.id} id={note.id} onDelete={removeNote} />
      ))}
      <Pomodoro />
      <button
        onClick={addNote}
        className="px-4 py-2 mt-4 bg-white shadow-md text-black rounded-2xl"
      >
        add sticky
      </button>
      </div>
    </>
  );
}
