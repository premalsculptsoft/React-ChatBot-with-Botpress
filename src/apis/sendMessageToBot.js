import axios from 'axios'

export default function sendMessageToBot(data) {
  const BASE_URL = `http://localhost:3000`
  const BOT_ID = `trial`
  const USER_ID = `premal.sculptsoft@gmail.com`
  const URL = `${BASE_URL}/api/v1/bots/${BOT_ID}/converse/${USER_ID}`
  const config = {
    method: 'post',
    url: URL,
    headers: { 'Content-Type': 'application/json' },
    data,
  }

  return new Promise((resolve, reject) => {
    axios(config)
      .then(result => resolve(result.data))
      .catch(error => reject(error))
  })
}


