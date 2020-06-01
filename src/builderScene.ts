import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from '../3f3fe65b-c648-44bc-8781-c2a40bc95bb4/src/item'
import Script2 from '../28352c3a-cc20-4ab4-b4b8-a4562a6b0d4d/src/item'
import Script3 from '../68986c60-c95c-41ab-adf0-d0e02f5b5440/src/item'
import Script4 from '../7e78cd70-5414-4ec4-be5f-198ec9879a5e/src/item'

export function builderScene() {
  const _scene = new Entity('_scene')
  engine.addEntity(_scene)
  const transform = new Transform({
    position: new Vector3(0, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  _scene.addComponentOrReplace(transform)

  const entity = new Entity('entity')
  engine.addEntity(entity)
  entity.setParent(_scene)
  const gltfShape = new GLTFShape(
    'models/FloorBaseGrass_01/FloorBaseGrass_01.glb'
  )
  gltfShape.withCollisions = true
  gltfShape.isPointerBlocker = true
  gltfShape.visible = true
  entity.addComponentOrReplace(gltfShape)
  const transform2 = new Transform({
    position: new Vector3(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  entity.addComponentOrReplace(transform2)

  const classicBench = new Entity('classicBench')
  engine.addEntity(classicBench)
  classicBench.setParent(_scene)
  const transform3 = new Transform({
    position: new Vector3(12.5, 0, 11.5),
    rotation: new Quaternion(
      0,
      -0.2902846932411194,
      3.4604628496026635e-8,
      0.9569403529167175
    ),
    scale: new Vector3(1, 1, 1),
  })
  classicBench.addComponentOrReplace(transform3)
  const gltfShape2 = new GLTFShape('models/Bench_01/Bench_01.glb')
  gltfShape2.withCollisions = true
  gltfShape2.isPointerBlocker = true
  gltfShape2.visible = true
  classicBench.addComponentOrReplace(gltfShape2)

  const bluePinkMysticalMushroomTree = new Entity(
    'bluePinkMysticalMushroomTree'
  )
  engine.addEntity(bluePinkMysticalMushroomTree)
  bluePinkMysticalMushroomTree.setParent(_scene)
  const transform4 = new Transform({
    position: new Vector3(12.5, 0, 3.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  bluePinkMysticalMushroomTree.addComponentOrReplace(transform4)
  const gltfShape3 = new GLTFShape('models/Tree_02/Tree_02.glb')
  gltfShape3.withCollisions = true
  gltfShape3.isPointerBlocker = true
  gltfShape3.visible = true
  bluePinkMysticalMushroomTree.addComponentOrReplace(gltfShape3)

  const ancientMediumStonePath = new Entity('ancientMediumStonePath')
  engine.addEntity(ancientMediumStonePath)
  ancientMediumStonePath.setParent(_scene)
  const transform5 = new Transform({
    position: new Vector3(9, 0, 9),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  ancientMediumStonePath.addComponentOrReplace(transform5)
  const gltfShape4 = new GLTFShape(
    'models/RockFloor_Module_2M/RockFloor_Module_2M.glb'
  )
  gltfShape4.withCollisions = true
  gltfShape4.isPointerBlocker = true
  gltfShape4.visible = true
  ancientMediumStonePath.addComponentOrReplace(gltfShape4)

  const ancientMediumStonePath2 = new Entity('ancientMediumStonePath2')
  engine.addEntity(ancientMediumStonePath2)
  ancientMediumStonePath2.setParent(_scene)
  ancientMediumStonePath2.addComponentOrReplace(gltfShape4)
  const transform6 = new Transform({
    position: new Vector3(6, 0, 9),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  ancientMediumStonePath2.addComponentOrReplace(transform6)

  const ancientMediumStonePath3 = new Entity('ancientMediumStonePath3')
  engine.addEntity(ancientMediumStonePath3)
  ancientMediumStonePath3.setParent(_scene)
  ancientMediumStonePath3.addComponentOrReplace(gltfShape4)
  const transform7 = new Transform({
    position: new Vector3(4, 0, 9),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  ancientMediumStonePath3.addComponentOrReplace(transform7)

  const shrub = new Entity('shrub')
  engine.addEntity(shrub)
  shrub.setParent(_scene)
  const transform8 = new Transform({
    position: new Vector3(4.5, 0, 3),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  shrub.addComponentOrReplace(transform8)
  const gltfShape5 = new GLTFShape('models/Bush_01/Bush_01.glb')
  gltfShape5.withCollisions = true
  gltfShape5.isPointerBlocker = true
  gltfShape5.visible = true
  shrub.addComponentOrReplace(gltfShape5)

  const shrub2 = new Entity('shrub2')
  engine.addEntity(shrub2)
  shrub2.setParent(_scene)
  const transform9 = new Transform({
    position: new Vector3(3.5, 0, 15),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  shrub2.addComponentOrReplace(transform9)
  shrub2.addComponentOrReplace(gltfShape5)

  const balsamFlower = new Entity('balsamFlower')
  engine.addEntity(balsamFlower)
  balsamFlower.setParent(_scene)
  const transform10 = new Transform({
    position: new Vector3(11.5, 0, 2.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  balsamFlower.addComponentOrReplace(transform10)
  const gltfShape6 = new GLTFShape('models/Plant_02/Plant_02.glb')
  gltfShape6.withCollisions = true
  gltfShape6.isPointerBlocker = true
  gltfShape6.visible = true
  balsamFlower.addComponentOrReplace(gltfShape6)

  const sunflowerHead = new Entity('sunflowerHead')
  engine.addEntity(sunflowerHead)
  sunflowerHead.setParent(_scene)
  const transform11 = new Transform({
    position: new Vector3(1.5, 0, 14),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  sunflowerHead.addComponentOrReplace(transform11)
  const gltfShape7 = new GLTFShape('models/Flower_01/Flower_01.glb')
  gltfShape7.withCollisions = true
  gltfShape7.isPointerBlocker = true
  gltfShape7.visible = true
  sunflowerHead.addComponentOrReplace(gltfShape7)

  const signpostRoot = new Entity('signpostRoot')
  engine.addEntity(signpostRoot)
  signpostRoot.setParent(_scene)
  const transform12 = new Transform({
    position: new Vector3(10, 0, 13),
    rotation: new Quaternion(
      -1.0589019759773763e-14,
      -0.9652383923530579,
      1.1506537589411892e-7,
      0.2613711953163147
    ),
    scale: new Vector3(1.0000317096710205, 1, 1.0000317096710205),
  })
  signpostRoot.addComponentOrReplace(transform12)

  const signpostTree = new Entity('signpostTree')
  engine.addEntity(signpostTree)
  signpostTree.setParent(_scene)
  const transform13 = new Transform({
    position: new Vector3(
      5.163928985595703,
      0.5730905532836914,
      12.90584945678711
    ),
    rotation: new Quaternion(
      1.2258724139686383e-14,
      0.9999500513076782,
      -1.1920333520265558e-7,
      -0.010002732276916504
    ),
    scale: new Vector3(1.0000059604644775, 1, 1.0000059604644775),
  })
  signpostTree.addComponentOrReplace(transform13)

  const indicatorArrow = new Entity('indicatorArrow')
  engine.addEntity(indicatorArrow)
  indicatorArrow.setParent(_scene)
  const transform14 = new Transform({
    position: new Vector3(7, 2.9388692378997803, 13),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  indicatorArrow.addComponentOrReplace(transform14)

  const ballDroid = new Entity('ballDroid')
  engine.addEntity(ballDroid)
  ballDroid.setParent(_scene)
  const transform15 = new Transform({
    position: new Vector3(3.5, 2.4617645740509033, 10.160882949829102),
    rotation: new Quaternion(
      -4.3225023034628926e-15,
      0.4927974045276642,
      -5.87460284862118e-8,
      0.8701441287994385
    ),
    scale: new Vector3(1.0000085830688477, 1, 1.0000085830688477),
  })
  ballDroid.addComponentOrReplace(transform15)
  const gltfShape8 = new GLTFShape('models/Droid_01/Droid_01.glb')
  gltfShape8.withCollisions = true
  gltfShape8.isPointerBlocker = true
  gltfShape8.visible = true
  ballDroid.addComponentOrReplace(gltfShape8)

  const signpostTree2 = new Entity('signpostTree2')
  engine.addEntity(signpostTree2)
  signpostTree2.setParent(_scene)
  const transform18 = new Transform({
    position: new Vector3(7.5, 2.9045917987823486, 14.463543891906738),
    rotation: new Quaternion(
      3.1957551483444624e-15,
      -0.9999372959136963,
      1.192018075357737e-7,
      0.011200233362615108
    ),
    scale: new Vector3(1.0000020265579224, 1, 1.0000020265579224),
  })
  signpostTree2.addComponentOrReplace(transform18)

  const channelId = Math.random().toString(16).slice(2)
  const channelBus = new MessageBus()
  const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
  const options = { inventory }

  const script1 = new Script1()
  const script2 = new Script2()
  const script3 = new Script3()
  const script4 = new Script4()
  script1.init(options)
  script2.init(options)
  script3.init(options)
  script4.init(options)
  script1.spawn(
    signpostRoot,
    { text: 'How many times can you\nclick in 10 seconds?', fontSize: 24 },
    createChannel(channelId, signpostRoot, channelBus)
  )
  script2.spawn(
    signpostTree,
    { text: 'Click the dog!', fontSize: 20 },
    createChannel(channelId, signpostTree, channelBus)
  )
  script3.spawn(
    indicatorArrow,
    { active: true },
    createChannel(channelId, indicatorArrow, channelBus)
  )
  script4.spawn(
    signpostTree2,
    { text: "Who's a good boy?", fontSize: 30 },
    createChannel(channelId, signpostTree2, channelBus)
  )
}
