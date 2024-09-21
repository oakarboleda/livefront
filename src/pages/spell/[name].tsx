import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Spell } from '@/types/spell'
import { getSpellByNameAndIndex } from '@/api/api'
import Image from 'next/image'

const SpellDetails: React.FC = () => {
  const router = useRouter()
  const { name } = router.query
  const [spell, setSpell] = useState<Spell | null>(null)

  // Fetch spell data when the name query parameter changes
  useEffect(() => {
    if (name) {
      getSpellByNameAndIndex(name as string).then((data) => {
        return setSpell(data as Spell)
      })
    }
  }, [name])

  console.log(spell)
  if (!spell) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{spell.name}</h1>
      <p>
        <strong>Level:</strong> {spell.level}
      </p>
      <p>
        <strong>School:</strong> {spell.school.name}
      </p>
      <p>
        <strong>Attack Type:</strong> {spell.attack_type}
      </p>
      <p>
        <strong>Casting Time:</strong> {spell.casting_time}
      </p>
      <p>
        <strong>Concentration:</strong> {spell.concentration ? 'Yes' : 'No'}
      </p>
      <p>
        <strong>Ritual:</strong> {spell.ritual ? 'Yes' : 'No'}
      </p>
      {spell.area_of_effect && (
        <p>
          <strong>Area of Effect:</strong> {spell.area_of_effect.size} {spell.area_of_effect.type}
        </p>
      )}
      <p>
        <strong>Material:</strong> {spell.material}
      </p>
      <p>
        <strong>Higher Level:</strong> {spell.higher_level}
      </p>
      <p>
        <strong>Range:</strong> {spell.range}
      </p>
      <p>
        <strong>Components:</strong> {spell.components.join(', ')}
      </p>
      <p>
        <strong>Duration:</strong> {spell.duration}
      </p>
      {spell.classes && (
        <p>
          <strong>Classes:</strong> {spell.classes.name}
        </p>
      )}

      {spell.image && <Image src={spell.image} alt={spell.name} />}
      <p>
        <strong>Description:</strong> {spell.desc.join(' ')}
      </p>
    </div>
  )
}

export default SpellDetails
