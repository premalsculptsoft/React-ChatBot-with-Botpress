import React from 'react'
import TextMessage from './MessageTypes/TextMessage'
import Image from './MessageTypes/Image'
import Carousel from './MessageTypes/Carousel'

function Message({ message, setMessages, messages }) {
  return (
    <div style={message.sender === 'YOU' ? { display: 'flex' } : { display: 'block' }}>
      {message.message_type === 'text' && <TextMessage message={message} />}
      {message.message_type === 'image' && <Image message={message} />}
      {message.message_type === 'carousel' && <Carousel setMessages={setMessages} message={message} messages={messages} />}
    </div>
  )
}

export default Message
