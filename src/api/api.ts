const BASE_URL = 'https://www.dnd5eapi.co'

const specificSpellIndexes = [
  'magic-missile',
  'misty-step',
  'fireball',
  'lightning-bolt',
  'cure-wounds',
  'healing-word',
  'raise-dead',
  'revivify',
  'finger-of-death',
  'power-word-kill',
]

export async function getAllSpells() {
  return Promise.all(
    specificSpellIndexes.map((index) => {
      const url = `${BASE_URL}/api/spells/${index}`
      console.log(`Fetching URL: ${url}`)
      return fetch(url).then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch ${url}: ${response.statusText}`)
        }
        return response.json()
      })
    }),
  )
}

export async function getSpellByNameAndIndex(index: string) {
  const url = `${BASE_URL}/api/spells/${index}`
  console.log(`Fetching URL: ${url}`)
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`)
  }
  const spell = await response.json()
  return spell
}
