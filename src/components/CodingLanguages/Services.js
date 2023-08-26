
export let codingLanguagesURL = 'https://coding-languages.fly.dev'

export function getCodingLanguages(){
  return fetch(codingLanguagesURL + '/languages').then((response) => response.json())
}


export function postCodingLanguage(id) {
  return fetch(codingLanguagesURL + '/languages', {
    method: "POST",
    body: {}
  })
}