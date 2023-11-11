
export let flyURL = 'https://coding-languages.fly.dev'
export let localhostURL = 'http://localhost:5000'
export let herokuURL = 'https://coding-languages-4240a0180d61.herokuapp.com/'

export let URL = process.env.NODE_ENV === 'production' ? flyURL : localhostURL 

export function getCodingLanguages(){
  return fetch(URL + '/languages').then((response) => response.json())
}


export async function postCodingLanguage(id) {
  let data = { "language_id": id}
  fetch(URL + '/votes', {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(data),
  }).then((response) => response && response.json())
}

export async function getVoteCount(){
  return fetch(URL + '/votes').then((response) => response.json())
}