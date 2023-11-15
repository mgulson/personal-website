import Replicate from "replicate"

export let replicateBaseUrl = 'https://api.replicate.com/v1/deployments/gullman99/my-llama/predictions'

export let API_KEY = process.env.REACT_APP_REPLICATE_API_KEY

const replicate = new Replicate({
  auth: process.env.REACT_APP_REPLICATE_API_KEY,
});

export async function postGpt(prompt) {
  let data = { input: { prompt } }
  let prediction = await replicate.deployments.predictions.create(
    "gullman99",
    "my-llama",
    {
      data
    }
  )
  prediction = await replicate.wait(prediction)
  console.log(prediction.output)
}
