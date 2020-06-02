import { buildLeaderBoard } from './leaderBoard'
import { builderScene } from './builderScene'
import utils from '../node_modules/decentraland-ecs-utils/index'
import { publishScore, getScoreBoard } from './serverHandler'

builderScene()

let clickCounter: number = 0
let sessionActive: boolean = false

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
      if (!sessionActive) {
        clickCounter = 0
        sessionActive = true
        dogStatue.addComponentOrReplace(
          new utils.Delay(10000, () => {
            sessionActive = false
            source.playOnce()
            publishScore(clickCounter)
            dogStatue.removeComponent(OnPointerDown)
          })
        )
      }
      clickCounter += 1
    },
    {
      hoverText: 'Click the Dog!',
    }
  )
)

// sound
let soundClip = new AudioClip('sounds/bell.mp3')
const source = new AudioSource(soundClip)
dogStatue.addComponentOrReplace(source)
source.loop = false

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

updateBoard()

async function updateBoard() {
  let scoreData: any = await getScoreBoard() // data.scoreBoard
  buildLeaderBoard(scoreData, boardParent, 9)
}

Input.instance.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, false, (e) => {
  log(`pos: `, Camera.instance.position)
  log(`rot: `, Camera.instance.rotation)
})
