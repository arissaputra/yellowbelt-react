import { FaMapMarker } from "react-icons/fa"
import { CharacterProps } from "../types/character"
import CharacterImage from "./CharacterImage"

const CharacterProfile = ({ character }: CharacterProps) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
    >
      <div className="text-gray-500 mb-4">{character.source}</div>
      <h1 className="text-3xl font-bold mb-4">
        {character.name}
      </h1>
      <CharacterImage imageURL={character.imageURL} />
      <div
        className="text-gray-500 my-4 flex align-middle justify-center md:justify-start"
      >
        <FaMapMarker className="text-orange-700 mr-2"/>
        <p className="text-orange-700">{character.location}</p>
      </div>
    </div>
  )
}

export default CharacterProfile