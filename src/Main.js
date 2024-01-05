// Main.js

import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EventContext } from "./EventContext";
import "./Main.css";

function Main() {
  const navigate = useNavigate();
  const { events, setEvents } = useContext(EventContext);
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarReady, setCalendarReady] = useState(false);

  useEffect(() => {
    setCalendarReady(true);
  }, []);

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
  };

  return (
    <div className="main-container">
      <div className="calendar-container">
        <div className="title-container">
          <h1>PerfecTime</h1>
          <h2 className="gold-text">: Time is Gold</h2>
        </div>
        <div className="button-container">
          <button
            className="custom-button"
            onClick={() => navigate("/add-event")}
          >
            일정 추가
          </button>
          <button
            className="custom-button"
            onClick={() => navigate("/edit-event")} // "/delete-event"를 "/edit-event"로 변경
          >
            일정 관리
          </button>
          <button className="custom-button">시간표 생성</button>
          <button className="custom-button">친구 관리</button>
        </div>
        <div className="calendar">
          {calendarReady && (
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={events}
              dateClick={handleDateClick}
              contentHeight={400}
            />
          )}
        </div>
      </div>
      <div className="weekly-calendar-container">
        <FullCalendar
          plugins={[timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          events={events}
          date={selectedDate}
          contentHeight={620} // 이 부분이 누락되었습니다.
        />
      </div>
    </div>
  );
}

export default Main;
