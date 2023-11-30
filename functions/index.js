/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest, onCall} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
let openapiURL = "https://api.openai.com/v1/chat/completions"
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started


exports.openaipost = onRequest(
  { secrets: ["OPEN_AI_API_KEY"], cors: true },
  async (req, res) => {

    let API_KEY = process.env.OPEN_AI_API_KEY
    let prompt = req.body.prompt
    logger.log(req.body)
    logger.log(prompt)
    let data = { 
      "model": "gpt-3.5-turbo",
      "messages": [
           {"role": "system", "content": "You are a helpful assistant"},
          {"role": "user", "content": prompt }
          ],
      "temperature": 0.7 
    }
    response = await fetch(openapiURL, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${API_KEY}`
      },
      method: "POST",
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(data),
    }).then((response) => response && response.json())
  
    res.send(response)
  }
)

// exports.openaioncallpost = onCall(
//   { secrets: ["OPEN_AI_API_KEY"], cors: true },
//   async (req, res) => {

//     let API_KEY = process.env.OPEN_AI_API_KEY
//     let prompt = req.body.prompt
//     logger.log(req.body)
//     logger.log(prompt)
//     let data = { 
//       "model": "gpt-3.5-turbo",
//       "messages": [
//            {"role": "system", "content": "You are a helpful assistant"},
//           {"role": "user", "content": prompt }
//           ],
//       "temperature": 0.7 
//     }
//     response = await fetch(openapiURL, {
//       headers: {
//         "Content-Type": "application/json",
//         'Authorization': `Bearer ${API_KEY}`
//       },
//       method: "POST",
//       mode: 'cors',
//       cache: 'default',
//       body: JSON.stringify(data),
//     }).then((response) => response && response.json())
  
//     res.send(response)
//   }
// )