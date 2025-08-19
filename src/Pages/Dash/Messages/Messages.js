import React,{useState,useReact, useEffect} from "react";
import "./Messages.css"

import DashHeader from "../../../Component/Client/DashHeader/DashHeader";
import MessageCard from "./MessageCard";
import { fetchMessages } from "../../../actions/contactAction";

const Messages = () => {
  const [messages,setMessages]=useState([])
  const [drop,setDrop]=useState("all")
  const [statusChange,setStatusChange]=useState(false)
  const handleUpdate=(e)=>{
    setDrop(e.target.value)
  }
  useEffect(()=>{
   (async()=>{
      const data=await fetchMessages(drop);
      setMessages(data)
      setStatusChange(false)
   })()
  },[drop,statusChange])
  return (
    <div className="dashSectionMain">
      <div className="fuContainer">
        <div className="dashTopSticky">
          <DashHeader title={"Messages"} />
        </div>
        <div className="dashMessagesFilter">
          <select onChange={handleUpdate}>
            <option value="">All</option>
            <option value="unread">New</option>
            <option value="contacted">Contacted</option>
          </select>
        </div>
        <div className="dashMessagesSection">
            {
              messages && messages.map((data,key)=>(
                <MessageCard val={data} setStatusChange={setStatusChange}/>
              ))
            }
        </div>
      </div>
    </div>
  );
};

export default Messages;
