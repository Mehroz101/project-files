import React, { useState } from 'react'
import "../styles/MessagesContainer.css"
const MessagesContainer = () => {
  const [openChat, setOpenChat] = useState(true)
  console.log(openChat)
  return (
    <div>
      <div className="messages_container">
        <h2>Messages</h2>
        <div className="messages_box">
          <div className={openChat ? "message_box_left " : "message_box_left"}>
            <div className="user_chat" onClick={() => setOpenChat(true)}>
              <div className="username"><span>Mehroz</span></div>
              <div className="user_lastmessage">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quod.</div>
            </div>
            <div className="user_chat">
              <div className="username"><span>Mehroz</span></div>
              <div className="user_lastmessage">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quod.</div>
            </div>
            <div className="user_chat">
              <div className="username"><span>Mehroz</span></div>
              <div className="user_lastmessage">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quod.</div>
            </div>
            <div className="user_chat">
              <div className="username"><span>Mehroz</span></div>
              <div className="user_lastmessage">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quod.</div>
            </div>
            <div className="user_chat">
              <div className="username"><span>Mehroz</span></div>
              <div className="user_lastmessage">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quod.</div>
            </div>
          </div>
          <div className={openChat ? "message_box_right " : " message_box_right_hide"}>
            <span className='back_btn' onClick={() => setOpenChat(false)}>---</span>


            <div className="message"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi necessitatibus incidunt recusandae eum itaque provident ea voluptate iusto sint vitae?</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessagesContainer
