import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CharacterProps } from '../types/character';

const CharacterCard = ({ character }: CharacterProps) => {
  const [showFullBackstory, setShowFullBackstory] = useState(false);

  const handleClick = () => {
    setShowFullBackstory((showFullBackstory) => !showFullBackstory)
  }

  let backstory = character.backstory;

  if (!showFullBackstory) {
    backstory = backstory.substring(0, 90) + '...';
  }

  return (
    <div key={character.id} className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{character.source}</div>
          <h3 className="text-xl font-bold">{character.name}</h3>
        </div>

        <div className="mb-5">
          {backstory}
        </div>

        <button onClick={handleClick} className="text-sky-600 mb-5 hover:text-sky-500"> {showFullBackstory ? 'Less' : 'More'}</button>

        <h3 className="text-sky-600 mb-2">{character.occupation}</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className='inline text-lg mb-1 mr-1' />
            {character.location}
          </div>
          <Link
            to={`/characters/${character.id}`}
            className="h-[36px] bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard