import React from 'react'
import "./inputchat.css";
import { Send } from 'lucide-react';
const inputchat = () => {
  return (
    <div className="inputchat-container">
       <input type="text" className="inputchat" placeholder="Type your message here..." />
       <button className="send-btn"><Send /></button>
    </div>
  )
}

export default inputchat
