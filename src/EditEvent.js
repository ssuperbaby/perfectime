// EditEvent.js

import React, { useContext, useState } from "react";
import { EventContext } from "./EventContext";
import "./EditEvent.css";

function EditEvent() {
  const { events, setEvents } = useContext(EventContext);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const handleEdit = () => {
    const newEvents = events.map((event) =>
      event === selectedEvent ? { ...event, title: newTitle } : event
    );
    setEvents(newEvents);
    setSelectedEvent(null);
    setNewTitle("");
  };

  return (
    <div className="edit-event-container">
      <h1>일정 수정</h1>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <span onClick={() => setSelectedEvent(event)}>{event.title}</span>
          </li>
        ))}
      </ul>
      {selectedEvent && (
        <div>
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="새로운 일정 이름"
          />
          <button onClick={handleEdit}>수정</button>
        </div>
      )}
    </div>
  );
}

export default EditEvent;
