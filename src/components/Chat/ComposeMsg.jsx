import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import sendMessageToBot from '../../apis/sendMessageToBot'
import './chat.css'

function ComposeMsg({ setMessages, messages, setIsTyping }) {
  const [msg, setMessage] = useState('')

  const sendMessage = () => {
    if (!msg.length) return
    const textMsg = {
      msg_id: nanoid(),
      message_type: 'text',
      msg_payload: msg,
      sender: 'YOU',
      bubble: messages[messages.length - 1]?.sender === 'YOU' ? 1 : 0,
    }
    setMessages([...messages, textMsg])
    sendToBot(textMsg)
    setMessage('')
  }

  const sendToBot = async textMsg => {
    setIsTyping(true)
    try {
      const payload = { type: 'text', text: msg }
      const res = await sendMessageToBot(payload)
      console.log(res.responses)
      if (res.responses.length) {
        const texts = []
        res.responses.forEach((msg, index) => {
          if (index === 0) texts.push({ ...msg, bubble: 0, msg_id: nanoid(), message_type: msg.type, msg_payload: msg.text })
          else texts.push({ ...msg, bubble: 1, msg_id: nanoid(), message_type: msg.type, msg_payload: msg.text })
        })
        //console.log(messages)
        setMessages([...messages, textMsg, ...texts])
      }
    } catch (error) {}
    setIsTyping(false)
  }

  const onKeyUp = e => {
    e.keyCode === 13 && sendMessage()
  }

  return (
    <div className='compose-div'>
      <input placeholder='Enter your message here......' value={msg} onKeyUp={onKeyUp} onChange={e => setMessage(e.target.value)} />
      <button onClick={sendMessage}>
        Send
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
          <path fill='none' d='M0 0h24v24H0z' />
          <path d='M3 13h6v-2H3V1.846a.5.5 0 0 1 .741-.438l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V13z' fill='rgba(255,255,255,1)' />
        </svg>
      </button>
    </div>
  )
}

export default ComposeMsg
