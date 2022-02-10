import React from 'react'

function TextMessage({ message }) {
  return <div className={message.sender === 'YOU' ? `chat_bubble by-you _${message.bubble}-you` : `chat_bubble _${message.bubble}-bot`}>{message.msg_payload}</div>
}

export default TextMessage
