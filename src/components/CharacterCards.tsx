import CharacterCard from './CharacterCard';
import Spinner from './Spinner';
import { useGetCharactersQuery } from '../api/charactersApi';
import { useEffect } from 'react';
import { Character } from '../types/character';

interface CharacterCardsProps {
  isHome?: boolean;
}

const CharacterCards = ({ isHome = false }: CharacterCardsProps) => {
  const limit = isHome ? 3 : undefined;
  const {data: characters, isLoading, refetch} = useGetCharactersQuery(limit)

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (isLoading) {
    return <Spinner />
  }

  if (!characters || characters.length === 0) {
    return <p>No characters found.</p>;
  }

  return (
    <section className="bg-sky-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-sky-600 mb-6 text-center">
          {isHome ? 'Recent Characters' : 'Browse Characters'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {characters.map((character: Character) => (
            <CharacterCard character={character} key={character.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CharacterCards