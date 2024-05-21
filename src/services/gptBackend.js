
// export let michaelgptjavaURL = 'http://localhost:8080/gpt/post'

// export let openapiURL = "https://api.openai.com/v1/chat/completions"

export let firebaseOpenAIURL = "https://openaipost-aqa7nos75a-uc.a.run.app"


export async function postGpt(prompt) {
  let data = { "prompt": prompt} 
  return fetch(firebaseOpenAIURL, {
    method: "POST",
    mode: 'cors',
    cache: 'default',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }).then((response) => response && response.json())
}

// export async function GetGptResult(url) {
//   return fetch(url).then((response) => response.json())
// }
