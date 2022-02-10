import React from 'react'
import { nanoid } from 'nanoid'

function Carousel({ message, setMessages, messages }) {
  console.log(message)

  const sendData = data => {
    console.log(data)
    const msg = {
      msg_id: nanoid(),
      message_type: 'text',
      msg_payload: data.title,
      sender: 'YOU',
      bubble: 0,
      data,
    }
    setMessages([...messages, msg])
  }

  const Button = ({ button }) => (
    <button className='carousel-button' onClick={() => sendData(button)}>
      {button.title}
    </button>
  )

  const Card = ({ element, message }) => (
    <div className={`chat_bubble _${message.bubble}-bot carousel`}>
      <div>{element.title}</div>
      <div className='carousel-options'>
        {element.buttons.map((element, i) => (
          <Button key={i} button={element} />
        ))}
      </div>
    </div>
  )

  return (
    <div>
      {message.elements.map((element, i) => (
        <Card key={i} element={element} message={message} />
      ))}
    </div>
  )
}

export default Carousel
