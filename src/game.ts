import { buildLeaderBoard } from './leaderBoard'
import { builderScene } from './builderScene'
import utils from '../node_modules/decentraland-ecs-utils/index'
import { publishScore, getScoreBoard } from './serverHandler'

builderScene()

let clickCounter: number = 0
let sessionActive: boolean = false
let readyToPlay: boolean = true

// dog statue
const dogStatue = new Entity('dogStatue')
engine.addEntity(dogStatue)
dogStatue.addComponent(
  new Transform({
    position: new Vector3(7.5, 0, 13),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
)
dogStatue.addComponent(new GLTFShape('models/PillarDog_01/PillarDog_01.glb'))
dogStatue.addComponent(
  new OnPointerDown(
    (e) => {
      if (!readyToPlay) {
        return
      }
      if (!sessionActive) {
        clickCounter = 0
        sessionActive = true

        dogStatue.addComponentOrReplace(
          new utils.Delay(10000, () => {
            readyToPlay = false
            sessionActive = false
            soundSource.playOnce()
            publishScore(clickCounter)
            boardParent.addComponentOrReplace(
              new utils.Delay(1000, () => {
                updateBoard()
                readyToPlay = true
              })
            )
          })
        )
      }
      clickCounter += 1
      soundSource2.playOnce()
    },
    {
      hoverText: 'Click the Dog!',
    }
  )
)

// reference position for the leader board
const boardParent = new Entity()
boardParent.addComponent(
  new Transform(
    new Transform({
      position: new Vector3(1.3, 2.2, 6.5),
      rotation: Quaternion.Euler(0, 270, 0),
    })
  )
)
engine.addEntity(boardParent)

// update leader board
updateBoard()

async function updateBoard() {
  let scoreData: any = await getScoreBoard() // data.scoreBoard
  buildLeaderBoard(scoreData, boardParent, 9)
}

// sounds
let bellClip = new AudioClip('sounds/bell.mp3')
const soundSource = new AudioSource(bellClip)
boardParent.addComponentOrReplace(soundSource)
soundSource.loop = false

let clickClip = new AudioClip('sounds/click.mp3')
const soundSource2 = new AudioSource(clickClip)
dogStatue.addComponentOrReplace(soundSource2)
soundSource2.loop = false

// Input.instance.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, false, (e) => {
//   log(`pos: `, Camera.instance.position)
//   log(`rot: `, Camera.instance.rotation)
// })
