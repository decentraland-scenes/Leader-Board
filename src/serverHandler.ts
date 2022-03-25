import { getUserData } from '@decentraland/Identity'

// get player data
const userData = executeTask(async () => {
  const data = await getUserData()
  log(data.displayName)
  return data
})

// external servers being used by the project - Please change these to your own if working on something else!
export const fireBaseServer =
  'https://us-central1-dcl-door.cloudfunctions.net/app/'

// get latest scoreboard data from server
export async function getScoreBoard() {
  try {
    const url = fireBaseServer + 'get-scores'
    const response = await fetch(url)
    const json = await response.json()
    log(json)
    return json
  } catch (e) {
    log('error fetching scores from server ', e)
  }
}

// change data in scoreboard
export async function publishScore(score: number) {
  if (!userData) {
    await userData
  }
  try {
    const url = fireBaseServer + 'publish-scores'
    const body = JSON.stringify({
      name: (await userData).displayName,
      id: (await userData).userId,
      score: score
    })
    log(body)
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body
    })
    return response.json()
  } catch (e) {
    log('error posting to server ', e)
  }
}
