import { FaStar } from "react-icons/fa"
import { CharacterProps } from "../types/character"

const CharacterDetails = ({ character }: CharacterProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-indigo-800 text-lg font-bold mb-6">
        Character Backstory
      </h3>

      <p className="mb-4">
      {character.backstory}
      </p>

      <h3 className="text-indigo-800 text-lg font-bold mb-2">Age</h3>
      <p className="mb-4">{character.age}</p>

      <h3 className="text-indigo-800 text-lg font-bold mb-2">Occupation</h3>
      <p className="mb-4">{character.occupation}</p>

      <h3 className="text-indigo-800 text-lg font-bold mb-2">Special Abilities</h3>
      {character.specialAbilities.map((ability, index) => (
        <div key={index} className="flex align-middle justify-center md:justify-start">
          <FaStar className="text-yellow-400 mr-2" />{ability}
        </div>
      ))}
    </div>
  )
}

export default CharacterDetails