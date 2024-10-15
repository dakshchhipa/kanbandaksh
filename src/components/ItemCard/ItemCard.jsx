import React, { useEffect, useState } from "react";
import "./Card.css";
import Avatar from "react-avatar";

const Card = ({ ticket, type, userName }) => {
  const [isChecked, setIsChecked] = useState(false);

  // Load the checkbox state from localStorage when the component mounts
  useEffect(() => {
    const storedCheckedState = localStorage.getItem(`checkbox-${ticket.id}`);
    if (storedCheckedState) {
      setIsChecked(JSON.parse(storedCheckedState));
    }
  }, [ticket.id]);

  // Save the checkbox state to localStorage whenever it changes
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    localStorage.setItem(
      `checkbox-${ticket.id}`,
      JSON.stringify(event.target.checked)
    );
  };

  return (
    <div className="card_box">
      <div className="card-container">
        <div key={ticket.id} className="ticket-card">
          <div className="ticket-header">
            <span className="ticket-id">{ticket.id}</span>
            {(type === "status" || type === "priority") && (
              <Avatar
                name={userName}
                size="16"
                round={true}
                className="user-avatar"
              />
            )}
          </div>
          <div className="ticket-middle">
            {(type === "user" || type === "priority") && (
              <label className="ticket-label">
                <input
                  type="checkbox"
                  className="ticket-checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className="custom-checkbox"></span>
              </label>
            )}
            <h3 className="ticket-title">{ticket.title}</h3>
          </div>
          <div className="ticket-footer">
            <span className="ticket-tag">
              <i className="icon-warning"></i> {ticket.tag || "No title"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
