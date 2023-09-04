
export let codingLanguagesURL = 'https://coding-languages.fly.dev'
export let localhostURL = 'http://localhost:5000'

export function getCodingLanguages(){
  return fetch(codingLanguagesURL + '/languages').then((response) => response.json())
}


export async function postCodingLanguage(id) {
  let data = { "language_id": id}
  const response = await fetch(codingLanguagesURL + '/votes', {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(data),
  })
  return await response.json()
}