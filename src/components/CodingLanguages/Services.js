
export let codingLanguagesURL = 'https://coding-languages.fly.dev'

export function getCodingLanguages(){
  return fetch(codingLanguagesURL + '/languages', { mode: 'no-cors'})
}


export function postCodingLanguage(id) {

}