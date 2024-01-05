// ScheduleModal.js

import React from "react";

function ScheduleModal({ isOpen, onClose, onAdd }) {
  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const date = event.target.elements.date.value;
    onAdd({ title, date });
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <label>
          일정 이름:
          <input type="text" name="title" required />
        </label>
        <label>
          날짜:
          <input type="date" name="date" required />
        </label>
        <button type="submit">추가</button>
        <button type="button" onClick={onClose}>
          닫기
        </button>
      </form>
    </div>
  );
}

export default ScheduleModal;
