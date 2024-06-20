import { useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Spinner from '../components/Spinner';
import { useGetCharacterByIdQuery } from '../api/charactersApi';

const CharacterAppearance = lazy(() => import ('../components/CharacterAppearance'));
const ManageCharacter = lazy(() => import ('../components/ManageCharacter'));
const CharacterDetails = lazy(() => import ('../components/CharacterDetails'));
const CharacterProfile = lazy(() => import ('../components/CharacterProfile'));

const CharacterPage = () => {
  const { id } = useParams();
  const characterId = id ? id : undefined;
  const { data: character, refetch } = useGetCharacterByIdQuery(characterId);

  useEffect(() => {
    refetch();
  }, [characterId, refetch]);

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/characters"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Characters Page
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <Suspense fallback={<Spinner />}>
                {character && <CharacterProfile character={character} />}
              </Suspense>
              <Suspense fallback={<Spinner />}>
                {character && <CharacterDetails character={character} />}
              </Suspense>
            </main>

            <aside>
              <Suspense fallback={<Spinner />}>
                {character && <CharacterAppearance character={character} />}
              </Suspense>
              <Suspense fallback={<Spinner />}>
                {character && <ManageCharacter character={character} />}
              </Suspense>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default CharacterPage