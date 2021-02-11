import { buildLeaderBoard } from './leaderBoard'
import { builderScene } from './builderContent'
import * as utils from '@dcl/ecs-scene-utils'
import { publishScore, getScoreBoard } from './serverHandler'
import * as ui from '@dcl/ui-scene-utils'

builderScene()

let clickCounter = new ui.UICounter(0)

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
        clickCounter.set(0)
        sessionActive = true

        dogStatue.addComponentOrReplace(
          new utils.Delay(10000, () => {
            readyToPlay = false
            sessionActive = false
            soundSource.playOnce()
            publishScore(clickCounter.read())
            dogStatue.getComponent(OnPointerDown).hoverText = 'Time up!'
            boardParent.addComponentOrReplace(
              new utils.Delay(1000, () => {
                updateBoard()
                readyToPlay = true
                dogStatue.getComponent(OnPointerDown).hoverText =
                  'Click the Dog!'
              })
            )
          })
        )
      }
      clickCounter.increase()
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

// update board every 2 seconds
boardParent.addComponent(
  new utils.Interval(2000, () => {
    updateBoard()
  })
)

// update leader board
updateBoard()
