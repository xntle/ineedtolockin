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
      <button
        onClick={addNote}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Add Sticky Note
      </button>
      {notes.map((note) => (
        <Sticky key={note.id} id={note.id} onDelete={removeNote} />
      ))}
      <Pomodoro />
    </>
  );
}
