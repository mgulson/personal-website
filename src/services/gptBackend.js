import Replicate from "replicate"

export let michaelgptjavaURL = 'http://localhost:8080/gpt/post'

export let API_KEY = process.env.REACT_APP_REPLICATE_API_KEY

export async function postGpt(prompt) {
  console.log(API_KEY)
  let data = {"prompt": prompt }
  return fetch(michaelgptjavaURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(data),
  }).then((response) => response && response.json())
}
