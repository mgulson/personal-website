export let replicateurl = 'https://api.replicate.com/v1/deployments/gullman99/my-llama/predictions'


export async function postQuestion(id) {
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