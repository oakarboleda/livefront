const BASE_URL = 'https://www.dnd5eapi.co'

// Predefined list of specific spells from D&D 5e API.
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

/**
 * Fetches all specific spells from the API.
 *
 * This function fetches a predefined list of spells from the D&D 5e API.
 * It returns a promise that resolves to an array of spell objects.
 *
 * @returns {Promise<Object[]>} A promise that resolves to an array of spell objects.
 * @throws {Error} If any of the fetch requests fail.
 */
export async function getAllSpells(): Promise<object[]> {
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

/**
 * Fetches a specific spell by its index from the API.
 *
 * This function fetches a spell from the D&D 5e API using the provided index.
 * It returns a promise that resolves to the spell object.
 *
 * @param {string} index - The index of the spell to fetch.
 * @returns {Promise<Object>} A promise that resolves to the spell object.
 * @throws {Error} If the fetch request fails.
 */
export async function getSpellByNameAndIndex(index: string): Promise<object> {
  const url = `${BASE_URL}/api/spells/${index}`
  console.log(`Fetching URL: ${url}`)
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`)
  }
  const spell = await response.json()
  return spell
}
