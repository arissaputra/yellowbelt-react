import { useState } from 'react';
import { Character } from "../types/character";
import { FaPlus } from 'react-icons/fa';

const DEFAULT_VALUE: Character = {
  name: '',
  age: 10,
  occupation: '',
  location: '',
  specialAbilities: [''],
  backstory: '',
  appearance: {
    hairColor: '',
    eyeColor: '',
    height: '',
    otherFeatures: ['']
  },
  source: '',
  imageURL: ''
}

const AddCharacterPage = () => {
  const [character, setCharacter] = useState<Character>(DEFAULT_VALUE);

  const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  }

  const handleAddAbility = () => {
    const updatedCharacter = {...character}
    updatedCharacter.specialAbilities.push('')

    setCharacter(updatedCharacter)
  }

  const handleRemoveAbility = (index: number) => {
    const updatedCharacter = {...character}
    updatedCharacter.specialAbilities.splice(index, 1)

    setCharacter(updatedCharacter)
  }

  const handleAddFeature = () => {
    const updatedCharacter = {...character}
    updatedCharacter.appearance.otherFeatures.push('')

    setCharacter(updatedCharacter)
  }

  const handleRemoveFeature = (index: number) => {
    const updatedCharacter = {...character}
    updatedCharacter.appearance.otherFeatures.splice(index, 1)

    setCharacter(updatedCharacter)
  }

  return (
    <section className="bg-sky-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Character</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >From</label
              >
              <input
                type="text"
                id="source"
                name="source"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Doraemon Series"
                required
                value={character.source}
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Name</label
              >
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Nobita"
                required
                value={character.name}
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Age</label
              >
              <input
                type="number"
                id="age"
                name="age"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. 10"
                required
                value={character.age}
                onChange={(e) => console.log(Number(e.target.value))}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Occupation</label
              >
              <input
                type="text"
                id="occupation"
                name="occupation"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Student"
                required
                value={character.occupation}
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Location</label
              >
              <input
                type="text"
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Japan"
                required
                value={character.location}
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <div className="flex">
                <label className="text-gray-700 font-bold mb-2"
                  >Special Abilities</label
                >
                <button onClick={handleAddAbility} className="text-blue-600 px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 flex items-center" type="button">
                  Add <FaPlus className="ml-2" />
                </button>
              </div>
              {character.specialAbilities.map((ability, abilityIndex) => (
                <div className="flex" key={abilityIndex}>
                  <input
                    type="text"
                    className="border rounded w-9/12 py-2 px-3 mb-2"
                    required
                    value={ability}
                    onChange={(e) => console.log(e.target.value)}
                  />
                  <button onClick={() => handleRemoveAbility(abilityIndex)} className="text-red-600 px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 flex items-center" type="button">
                    remove
                  </button>
                </div>
              ))}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Backstory</label
              >
              <textarea
                id="backstory"
                name="backstory"
                rows={5}
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder=""
                required
                value={character.backstory}
                onChange={(e) => console.log(e.target.value)}
              />
            </div>

            <h3 className="text-2xl mb-5">Character Appearance</h3>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Hair Color</label
              >
              <input
                type="text"
                id="hair-color"
                name="hair-color"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Black"
                required
                value={character.appearance.hairColor}
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Eye Color</label
              >
              <input
                type="text"
                id="eye-color"
                name="eye-color"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Black"
                required
                value={character.appearance.eyeColor}
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Height</label
              >
              <input
                type="text"
                id="height"
                name="height"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Black"
                required
                value={character.appearance.height}
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <div className="flex">
                <label className="text-gray-700 font-bold mb-2"
                  >Other Features</label
                >
                <button onClick={handleAddFeature} className="text-blue-600 px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 flex items-center" type="button">
                  Add <FaPlus className="ml-2" />
                </button>
              </div>
              {character.appearance.otherFeatures.map((feature, featureIndex) => (
                <div className="flex" key={featureIndex}>
                  <input
                    type="text"
                    className="border rounded w-9/12 py-2 px-3 mb-2"
                    required
                    value={feature}
                    onChange={(e) => console.log(e.target.value)}
                  />
                  <button onClick={() => handleRemoveFeature(featureIndex)} className="text-red-600 px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 flex items-center" type="button">
                    remove
                  </button>
                </div>
              ))}

            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Image URL</label
              >
              <input
                type="text"
                id="image-url"
                name="image-url"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder=""
                required
                value={character.imageURL}
                onChange={(e) => console.log(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-sky-600 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Character
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddCharacterPage