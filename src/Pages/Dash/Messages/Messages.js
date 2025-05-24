import React from "react";
import "./Messages.css"

import DashHeader from "../../../Component/Client/DashHeader/DashHeader";
import MessageCard from "./MessageCard";

const Messages = () => {
  return (
    <div className="dashSectionMain">
      <div className="fuContainer">
        <div className="dashTopSticky">
          <DashHeader title={"Messages"} />
        </div>
        <div className="dashMessagesFilter">
          <select>
            <option>All</option>
            <option>New</option>
            <option>Read</option>
          </select>
        </div>
        <div className="dashMessagesSection">
            <MessageCard/>
            <MessageCard/>
            <MessageCard/>
        </div>
      </div>
    </div>
  );
};

export default Messages;
