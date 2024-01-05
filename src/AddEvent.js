// AddEvent.js

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EventContext } from "./EventContext"; // EventContext를 import
import "./AddEvent.css";

function AddEvent() {
  const navigate = useNavigate();
  const { events, setEvents } = useContext(EventContext); // 이벤트 상태를 가져옴
  const [title, setTitle] = useState("");
  const [startDatetime, setStartDatetime] = useState(""); // 이벤트 시작 시간을 저장할 상태
  const [endDatetime, setEndDatetime] = useState(""); // 이벤트 종료 시간을 저장할 상태
  const [color, setColor] = useState("#000000"); // 이벤트 색상을 저장할 상태

  const handleSubmit = (event) => {
    event.preventDefault();
    setEvents([
      ...events,
      { title, start: startDatetime, end: endDatetime, color },
    ]); // 새 이벤트를 추가
    navigate("/main");
  };

  return (
    <div className="add-event-container">
      <h1 className="add-event-title">일정 추가</h1>
      <form onSubmit={handleSubmit} className="add-event-form">
        <label htmlFor="eventTitle" className="add-event-label">
          일정 제목:
        </label>
        <input
          id="eventTitle"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="add-event-input"
        />
        <label htmlFor="startDatetime" className="add-event-label">
          시작 날짜 및 시간:
        </label>
        <input
          id="startDatetime"
          type="datetime-local"
          value={startDatetime}
          onChange={(e) => setStartDatetime(e.target.value)}
          className="add-event-input"
        />
        <label htmlFor="endDatetime" className="add-event-label">
          종료 날짜 및 시간:
        </label>
        <input
          id="endDatetime"
          type="datetime-local"
          value={endDatetime}
          onChange={(e) => setEndDatetime(e.target.value)}
          className="add-event-input"
        />
        <label htmlFor="color" className="add-event-label">
          일정 색상:
        </label>
        <input
          id="color"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="add-event-input"
        />
        <button type="submit" className="add-event-button">
          일정 추가
        </button>
      </form>
    </div>
  );
}

export default AddEvent;
