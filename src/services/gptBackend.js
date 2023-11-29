import Replicate from "replicate"

export let michaelgptjavaURL = 'http://localhost:8080/gpt/post'

export let openapiURL = "https://api.openai.com/v1/chat/completions"

export let API_KEY = process.env.REACT_APP_OPENAPI_API_KEY

export async function postGpt(prompt) {

  let data = {
    "model": "gpt-3.5-turbo",
    "messages": [
         {"role": "system", "content": "You are a helpful assistant"},
        {"role": "user", "content": prompt}
        ],
    "temperature": 0.7, }
  return fetch(openapiURL, {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${API_KEY}`
    },
    method: "POST",
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(data),
  }).then((response) => response && response.json())
}

// export async function GetGptResult(url) {
//   return fetch(url).then((response) => response.json())
// }
