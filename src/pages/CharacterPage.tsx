import { useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import { Character } from '../types/character';
import axios from 'axios';
import Spinner from '../components/Spinner';

const CharacterAppearance = lazy(() => import ('../components/CharacterAppearance'));
const ManageCharacter = lazy(() => import ('../components/ManageCharacter'));
const CharacterDetails = lazy(() => import ('../components/CharacterDetails'));
const CharacterProfile = lazy(() => import ('../components/CharacterProfile'));

const CharacterPage = () => {
  const [character, setCharacter] = useState<Character>();
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      const apiUrl = `/api/characters/${id}`;
      try {
        const res = await axios.get(apiUrl);
        const data = res.data;
        setCharacter(data)
      } catch (error) {
        console.log('Error fetching data', error);
      }
    }

    fetchCharacter()
  }, [id])

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
              <Suspense fallback={<Spinner loading={true} />}>
                {character && <CharacterProfile character={character} />}
              </Suspense>
              <Suspense fallback={<Spinner loading={true} />}>
                {character && <CharacterDetails character={character} />}
              </Suspense>
            </main>

            <aside>
              <Suspense fallback={<Spinner loading={true} />}>
                {character && <CharacterAppearance character={character} />}
              </Suspense>
              <Suspense fallback={<Spinner loading={true} />}>
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