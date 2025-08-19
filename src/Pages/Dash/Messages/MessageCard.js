import React from "react";
import "./Messages.css";
import { updateMessage } from "../../../actions/contactAction";

function formatDateToDDMMYY(dateString) {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = String(date.getFullYear()).slice(-2); // last 2 digits

  return `${day}-${month}-${year}`;
}

const MessageCard = ({ val,setStatusChange }) => {
  const handleUpdate = async (e) => {
    await updateMessage(val._id, e.target.value);
    setStatusChange(true)
  };
  return (
    <div className="dashMessageCard">
      <div className="dashMessageTop">
        <div className="dashName">
          <p>
            {val.first} {val.last}
          </p>
        </div>
        <div className="dashStatus">
          <select onChange={handleUpdate}>
            <option value="unread">New</option>
            <option value="contacted">Contacted</option>
          </select>
        </div>
      </div>
      <div className="dashMessageDetails">
        <div className="dashMessageEmail">
          <p>{val.email}</p>
        </div>
        <div className="dashMessagePhone">
          <p>{val.phone}</p>
        </div>
      </div>
      <div className="dashMessageText">
        <spn>{val.message}</spn>
      </div>
      <div className="contactDateSection">
        <div className="contactDate">
          <span>Requested On</span>
          <p>{formatDateToDDMMYY(val.date)}</p>
        </div>
        {val.status !== "unread" && (
          <div className="repliedDate">
            <span>Replied On</span>
            <p>{formatDateToDDMMYY(val.responseDate)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageCard;
