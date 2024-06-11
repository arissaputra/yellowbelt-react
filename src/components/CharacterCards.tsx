import { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import Spinner from './Spinner';
import axios from 'axios';
import { Character } from '../types/character';

interface CharacterCardsProps {
  isHome?: boolean;
}

const CharacterCards = ({ isHome = false }: CharacterCardsProps) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const apiUrl = isHome ? '/api/characters?_limit=3' : '/api/characters'
      try {
        const res = await axios.get(apiUrl);
        const data = res.data;
        setCharacters(data)
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCharacters();
  }, [isHome])

  return (
    <section className="bg-sky-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-sky-600 mb-6 text-center">
          {isHome ? 'Recent Characters' : 'Browse Characters'}
        </h2>
        {loading ? (<Spinner loading={loading} />) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {characters.map((character) => (
              <CharacterCard character={character} key={character.id} />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

export default CharacterCards