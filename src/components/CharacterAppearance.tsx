import { CharacterProps } from "../types/character"

const CharacterAppearance = ({ character }: CharacterProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-6">Appearance</h3>

      <hr className="my-4" />

      <h3 className="text-xl">Hair Color:</h3>

      <p className="my-2 bg-indigo-100 p-2 font-bold">
        {character?.appearance.hairColor}
      </p>

      <h3 className="text-xl">Eye Color:</h3>

      <p className="my-2 bg-indigo-100 p-2 font-bold">
        {character?.appearance.eyeColor}
      </p>

      <h3 className="text-xl">Height:</h3>

      <p className="my-2 bg-indigo-100 p-2 font-bold">
        {character?.appearance.height}
      </p>

      <hr className="my-4" />

      <h3 className="text-xl">Other Features:</h3>

      <ul className="my-2 list-disc list-inside">
        {character?.appearance.otherFeatures.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  )
}

export default CharacterAppearance