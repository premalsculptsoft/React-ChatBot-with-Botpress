import React from 'react'

function Image({ message }) {
  return <img src={message.image} className={message.sender === 'YOU' ? `chat_bubble by-you _${message.bubble}-you` : `chat_bubble _${message.bubble}-bot`} />
}

export default Image
