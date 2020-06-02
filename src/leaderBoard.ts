let TiltleFont = new Font(Fonts.SanFrancisco_Heavy)
let SFFont = new Font(Fonts.SanFrancisco)

export enum TextTypes {
  BIGTITLE = 'bigtitle',
  BIGVALUE = 'bigvalue',
  TITLE = 'title',
  LABEL = 'label',
  VALUE = 'value',
  UNIT = 'unit',
  TINYVALUE = 'tinyvalue',
  TINYTITLE = 'tinytitle',
}

export class ScoreBoardText extends Entity {
  constructor(
    type: TextTypes,
    text: string,
    transform: TranformConstructorArgs,
    parent: Entity
  ) {
    super()
    engine.addEntity(this)

    this.addComponent(new Transform(transform))
    this.setParent(parent)

    let shape = new TextShape(text)

    shape.width = 10

    switch (type) {
      case TextTypes.BIGTITLE:
        shape.fontSize = 4
        shape.color = Color3.White()
        shape.vTextAlign = 'center'
        shape.font = TiltleFont
        break
      case TextTypes.BIGVALUE:
        shape.fontSize = 3
        shape.color = Color3.Green()
        shape.vTextAlign = 'center'
        shape.font = TiltleFont
        break

      case TextTypes.TITLE:
        shape.fontSize = 3
        shape.color = Color3.White()
        shape.vTextAlign = 'center'
        shape.width = 10
        shape.font = TiltleFont
        break
      case TextTypes.TINYTITLE:
        shape.fontSize = 2
        shape.color = Color3.White()
        shape.vTextAlign = 'center'
        shape.width = 10
        shape.font = SFFont
        break
      case TextTypes.LABEL:
        shape.fontSize = 3
        shape.color = Color3.White()
        shape.vTextAlign = 'left'
        shape.font = SFFont
        break
      case TextTypes.VALUE:
        shape.fontSize = 3
        shape.color = Color3.Green()
        shape.vTextAlign = 'right'
        shape.font = SFFont
        break
      case TextTypes.TINYVALUE:
        shape.fontSize = 2
        shape.color = Color3.Green()
        shape.vTextAlign = 'right'
        shape.font = SFFont
        break

      case TextTypes.UNIT:
        shape.fontSize = 2
        shape.color = Color3.White()
        shape.vTextAlign = 'right'
        shape.font = SFFont
        break
    }

    this.addComponent(shape)
  }
}

export async function buildLeaderBoard(
  scoreData: any[],
  parent: Entity,
  length: number
) {
  let nameTitle = new ScoreBoardText(
    TextTypes.BIGTITLE,
    'Player',
    {
      position: new Vector3(-0.8, 0.65, 0),
    },
    parent
  )

  let scoreTitle = new ScoreBoardText(
    TextTypes.BIGTITLE,
    'Score',
    {
      position: new Vector3(0.8, 0.65, 0),
    },
    parent
  )

  for (let i = 0; i < scoreData.length; i++) {
    if (i + 1 > length) {
      return
    }
    let name = new ScoreBoardText(
      TextTypes.TINYTITLE,
      scoreData[i].name,
      {
        position: new Vector3(-0.6, 0.2 - i / 4, 0),
      },
      parent
    )

    let score = new ScoreBoardText(
      TextTypes.TINYVALUE,
      scoreData[i].score.toString(),
      {
        position: new Vector3(0.6, 0.2 - i / 4, 0),
      },
      parent
    )
  }
}
