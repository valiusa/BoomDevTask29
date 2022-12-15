import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [note, setNote] = useState("");

  function handleChange(event) {
    setNote(event.target.value);
  }

  function saveNote() {
    localStorage.setItem("note", note);
  }

  function restoreNote() {
    setNote("");
    localStorage.removeItem("note");
  }

  useEffect(() => {
    const savedNote = localStorage.getItem("note");
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea
              className="textarea is-large"
              placeholder="Notes..."
              value={note}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          className="button is-large is-primary is-active"
          onClick={saveNote}
        >
          Save
        </button>
        <button className="button is-large" onClick={restoreNote}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
