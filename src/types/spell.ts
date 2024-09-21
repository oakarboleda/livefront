export type Spell = {
  index: string
  name: string
  level: number
  school: {
    name: string
    level: number
  }
  attack_type: string
  casting_time: string
  concentration: boolean
  ritual: boolean
  area_of_effect: {
    size: number
    type: string
  }
  material: string
  higher_level: string
  range: string
  components: string[]
  duration: string
  classes: {
    index: string
    level: number
    name: string
    url: string
  }
  image?: string // Add this line
  desc: string[]
}
